# json.extract! @user, :id, :username
json.partial! '/api/users/user', user: @user
json.user video.user.email