json.extract! video, :id, :description, :title, :created_at
json.mediaUrl polymorphic_url(video.media)
json.user video.user.email
# json.likes video.likes
# json.dislikes video.dislikes