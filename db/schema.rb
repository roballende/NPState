# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2023_01_26_003042) do

  create_table "parks", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.string "url"
    t.float "latitude"
    t.float "longitude"
    t.string "hazard_title"
    t.string "hazard_desc"
    t.string "hazard_url"
    t.string "hazard_date"
    t.json "img_urls"
    t.string "states"
    t.string "directions"
    t.json "activities"
  end

  create_table "reviews", force: :cascade do |t|
    t.string "comment"
    t.integer "rating"
    t.boolean "favorite"
    t.integer "user_id"
    t.integer "park_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "password"
  end

end
