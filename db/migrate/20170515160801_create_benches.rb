class CreateChairs < ActiveRecord::Migration[5.0]
  def change
    create_table :chairs do |t|
      t.string :description, null: false
      t.float :lat, null: false
      t.float :lng, null: false 

      t.timestamps
    end
  end
end
