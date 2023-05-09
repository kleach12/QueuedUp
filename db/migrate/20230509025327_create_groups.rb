class CreateGroups < ActiveRecord::Migration[7.0]
  def change
    create_table :groups do |t|
      t.integer :dj_id
      t.string :group_name
      t.string :uid

      t.timestamps
    end
  end
end
