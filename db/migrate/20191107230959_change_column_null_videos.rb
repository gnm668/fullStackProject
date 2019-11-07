class ChangeColumnNullVideos < ActiveRecord::Migration[5.2]
  def change
    change_column_null :videos, :title, false
  end
end
