class CreateMountains < ActiveRecord::Migration[6.0]
  def change
    create_table :mountains do |t|
      t.string :name
      t.integer :height
      t.string :location
      t.integer :difficulty

      t.timestamps
    end
  end
end
