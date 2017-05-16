class AddSeatingToChairs < ActiveRecord::Migration[5.0]
  def change
    add_column :chairs, :seating, :integer
  end
end
