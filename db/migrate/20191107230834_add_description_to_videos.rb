class AddDescriptionToVideos < ActiveRecord::Migration[5.2]
  def change
    add_column :videos, :description, :string
    change_column_null :videos, :description, false
  end
end
