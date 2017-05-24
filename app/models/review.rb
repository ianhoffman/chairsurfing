class Review < ApplicationRecord
  validates :user, :chair, :body, presence: true
  validates :rating, numericality: {
    only_integer: true,
    greater_than_or_equal_to: 0,
    less_than_or_equal_to: 5
  }

  belongs_to :chair
  belongs_to :user
end
