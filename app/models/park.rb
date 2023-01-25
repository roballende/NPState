class Park < ActiveRecord::Base
    has_many :reviews
    has_many :users, through: :reviews

    def self.most_reviewed
        joins(:reviews).group(:id).order("count(reviews.id) DESC").first
    end

    def average_rating
        self.reviews.sum(:rating) / self.reviews.count
    end

end
