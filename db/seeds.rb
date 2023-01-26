require 'faker'
require 'rest-client'

Park.destroy_all 
User.destroy_all
Review.destroy_all

puts "🌱 Seeding spices..."

ActiveRecord::Base.transaction do
  
    puts "getting parks & hazards"
    # Make a GET request to the API
    parks = RestClient.get('https://developer.nps.gov/api/v1/parks?&api_key=UBgJvmYW9eJ01PLKdsiVAK4g3Nkx7hey7urjtsMQ&limit=500')
    hazards = RestClient.get('https://developer.nps.gov/api/v1/alerts?&api_key=UBgJvmYW9eJ01PLKdsiVAK4g3Nkx7hey7urjtsMQ&limit=750')

    # Parse the JSON response
    parks_data = JSON.parse(parks)["data"]
    hazards_data = JSON.parse(hazards)["data"]

    # Iterate through the array of parks
    parks_data.each do |park|
        hazard = hazards_data.find { |h| h["parkCode"] == park["parkCode"] }
        img_urls = park["images"].map { |image| image["url"] }
        activities = park["activities"].map { |activity| activity["name"] }
        # Create a new park with the data from the API
        new_park = Park.create(
            name: park["fullName"], 
            states: park["states"], 
            description: park["description"],
            directions: park["directionsInfo"],
            url: park["url"],
            img_urls: img_urls,
            activities: activities,
            latitude: park["latitude"],
            longitude: park["longitude"],
            hazard_title: hazard ? hazard["title"] : nil,
            hazard_desc: hazard ? hazard["description"] : nil,
            hazard_url: hazard ? hazard["url"] : nil,
            hazard_date: hazard ? hazard["lastIndexedDate"] : nil
        )
    end

    puts "creating users"
    30.times do
        User.create(name: Faker::Name.name, password: Faker::Internet.password)
    end

    puts "creating reviews"
    900.times do
        Review.create(comment: Faker::Lorem.sentence, rating: rand(1..5), favorite: [true, false].sample, user_id: User.all.sample.id, park_id: Park.all.sample.id)
    end

end

puts "✅ Done seeding!"