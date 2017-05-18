class AddUserIdToChairs < ActiveRecord::Migration[5.0]
  def change
    add_column :chairs, :user_id, :integer, null: false
    add_index :chairs, :user_id
    add_column :chairs, :about, :text, null: false
  end
end
