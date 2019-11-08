class RemoveIndexFromVideos < ActiveRecord::Migration[5.2]
  def change
    remove_index "videos", name: "index_videos_on_user_id"
    add_index :videos, :user_id
  end
end
