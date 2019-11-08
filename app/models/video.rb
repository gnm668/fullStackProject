class Video < ApplicationRecord
    validates :user_id, presence: true
    validates :title, :description, presence: true
    
    belongs_to :user

    has_one_attached :media
end
