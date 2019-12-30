class ChangeIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index ["user_id", "video_id"], name: "index_comments_on_user_id_and_video_id"
    add_index :comments, :user_id
    add_index :comments, :video_id
  end
end
