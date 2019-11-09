json.extract! video, :id, :description, :title, :created_at
json.mediaUrl url_for(video.media)