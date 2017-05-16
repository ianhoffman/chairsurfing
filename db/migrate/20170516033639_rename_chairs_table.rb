class RenameChairsTable < ActiveRecord::Migration[5.0]
  def change
    rename_table :chairs, :chairs
  end
end
