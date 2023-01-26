class AddParkImgUrls < ActiveRecord::Migration[6.1]
    def change
        add_column :parks, :img_urls, :json
    end
end
