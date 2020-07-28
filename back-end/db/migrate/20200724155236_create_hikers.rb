class CreateHikers < ActiveRecord::Migration[6.0]
  def change
    create_table :hikers do |t|
      t.string :name
      t.integer :age
      t.integer :skill

      t.timestamps
    end
  end
end
