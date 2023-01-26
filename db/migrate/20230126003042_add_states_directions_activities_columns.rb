class AddStatesDirectionsActivitiesColumns < ActiveRecord::Migration[6.1]
    def change
        add_column :parks, :states, :string
        add_column :parks, :directions, :string
        add_column :parks, :activities, :json
    end
end
