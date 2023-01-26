class AddParkUrlColumn < ActiveRecord::Migration[6.1]
    def change
        add_column :parks, :url, :string
    end
end
