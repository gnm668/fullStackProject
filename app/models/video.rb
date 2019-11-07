class Video < ApplicationRecord
    validates :user_id, presence: true, uniqueness: true
    validates :title, :description, presence: true
    belongs_to :user
end
