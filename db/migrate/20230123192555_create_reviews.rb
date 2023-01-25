class CreateReviews < ActiveRecord::Migration[6.1]
    def change
        create_table :reviews do |t|
          t.string :comment
          t.integer :rating
          t.boolean :favorite
          t.integer :user_id
          t.integer :park_id
        end
    end
end
