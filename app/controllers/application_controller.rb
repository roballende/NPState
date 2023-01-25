class ApplicationController < Sinatra::Base
    set :default_content_type, 'application/json'

    get "/users/:user_id" do
        user = User.find(params[:user_id])
        user.to_json
    end
    
    # PARKS 
    get "/parks" do 
        parks = Park.all.order(:name)
        parks.to_json
    end

    get "/parks/:park_id" do 
        park = Park.find(params[:park_id])
        park.to_json(include: {reviews: {include: [:user]}})
    end

    # RATING
    get '/parks/:park_id/average_rating' do
        park = Park.find(params[:park_id])
        park.average_rating.to_json
    end

    # POST
    post '/reviews' do
        review = Review.create(
            comment: params[:comment],
            rating: params[:rating],
            favorite: params[:favorite],
            park_id: params[:park_id],
            user_id: params[:user_id]
        )
        review.to_json(include: { user: { only: [:name] } })
    end


    # PATCH

    # DELETE

end
