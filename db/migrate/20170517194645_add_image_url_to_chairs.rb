class AddImageUrlToChairs < ActiveRecord::Migration[5.0]
  def change
    add_column :chairs, :image_url, :string, null: false
  end
end
