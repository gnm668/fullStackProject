class CreateVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :videos do |t|
      t.integer :user_id, null: false
      t.timestamps
    end
    add_index :videos, :user_id, unique:true
    change_column_null :users, :username, false
    change_column_null :users, :email, false
  end
end
