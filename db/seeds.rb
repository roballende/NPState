require 'faker'
require 'rest-client'

Park.destroy_all 
User.destroy_all
Review.destroy_all

puts "🌱 Seeding spices..."

ActiveRecord::Base.transaction do
  
    puts "getting parks"
    # Make a GET request to the API
    response = RestClient.get('https://developer.nps.gov/api/v1/parks?&api_key=UBgJvmYW9eJ01PLKdsiVAK4g3Nkx7hey7urjtsMQ&limit=500')

    # Parse the JSON response
    parks_data = JSON.parse(response)["data"]

    # Iterate through the array of parks
    parks_data.each do |park|
        # Create a new park with the data from the API
        Park.create(
            name: park["fullName"], 
            description: park["description"],
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
