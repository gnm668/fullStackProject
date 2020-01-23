class Video < ApplicationRecord
    validates :user_id, presence: true
    validates :title, :description, presence: true
    
    belongs_to :user
    has_many :likes
    has_many :dislikes
    has_many :comments

    has_one_attached :media
end
