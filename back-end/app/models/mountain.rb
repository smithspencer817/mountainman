class Mountain < ApplicationRecord
    has_many :posts
    has_many :hikers, through: :posts

    validates :name, presence: true
    validates :height, presence: true, numericality: { only_integer: true }
    validates :location, presence: true
    validates :difficulty, presence: true, numericality: { only_integer: true }

end
