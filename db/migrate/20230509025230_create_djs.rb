class CreateDjs < ActiveRecord::Migration[7.0]
  def change
    create_table :djs do |t|
      t.integer :group_id
      t.string :username

      t.timestamps
    end
  end
end
