class RemoveSeatingFromChairs < ActiveRecord::Migration[5.0]
  def change
    remove_column :chairs, :seating
  end
end
