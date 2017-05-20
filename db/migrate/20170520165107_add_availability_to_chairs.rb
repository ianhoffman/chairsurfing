class AddAvailabilityToChairs < ActiveRecord::Migration[5.0]
  def change
    add_column :chairs, :accepting_guests, :boolean, null: false
  end
end
