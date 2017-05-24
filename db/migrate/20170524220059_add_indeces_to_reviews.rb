class AddIndecesToReviews < ActiveRecord::Migration[5.0]
  def change
    add_index :reviews, :user_id
    add_index :reviews, :chair_id
  end
end
