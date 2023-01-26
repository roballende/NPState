class LatLongHazardsColumns < ActiveRecord::Migration[6.1]
    def change
        add_column :parks, :latitude, :float
        add_column :parks, :longitude, :float
        add_column :parks, :hazard_title, :string
        add_column :parks, :hazard_desc, :string
        add_column :parks, :hazard_url, :string
        add_column :parks, :hazard_date, :string
    end
end
