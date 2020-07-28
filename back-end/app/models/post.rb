class Post < ApplicationRecord
  belongs_to :mountain
  belongs_to :hiker

  validates :content, presence: true
end
