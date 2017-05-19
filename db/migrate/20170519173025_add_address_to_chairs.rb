class AddAddressToChairs < ActiveRecord::Migration[5.0]
  def change
    add_column :chairs, :address, :string, null: false
  end
end
