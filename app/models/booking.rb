class Booking < ApplicationRecord
  validates :user, :chair, :start_date, :end_date, presence: true

  belongs_to :user
  belongs_to :chair
end
