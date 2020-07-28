class Hiker < ApplicationRecord
    has_many :posts
    has_many :mountains, through: :posts

    validates :name, presence: true
    validates :age, presence: true, numericality: { only_integer: true, greater_than: 14 }
end
