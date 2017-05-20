class AddUniquenessToUsers < ActiveRecord::Migration[5.0]
  def change
    remove_index :chairs, :user_id
    add_index :chairs, :user_id, unique: true
  end
end
