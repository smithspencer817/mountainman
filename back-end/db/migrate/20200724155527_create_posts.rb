class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.string :content
      t.integer :likes
      t.references :mountain, null: false, foreign_key: true
      t.references :hiker, null: false, foreign_key: true

      t.timestamps
    end
  end
end
