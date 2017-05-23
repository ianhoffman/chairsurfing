class Booking < ApplicationRecord
  validates :user, :chair, :start_date, :end_date, presence: true
  validates :status, inclusion: { in: ['PENDING', 'APPROVED', 'DENIED'] }

  belongs_to :user
  belongs_to :chair
end
