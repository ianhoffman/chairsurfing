class Booking < ApplicationRecord
  validates :user, :chair, :start_date, :end_date, presence: true
  validates :status, inclusion: { in: ['PENDING', 'APPROVED', 'DENIED'] }

  def self.deny_overlapping_bookings(booking)
    bookings = Booking.where('start_date <= ?', booking.end_date)
      .where('end_date >= ?', booking.start_date)
      .where('chair_id = ?', booking.chair_id)

    bookings.each do |overlapping_booking|
      next if (overlapping_booking.id == booking.id)
      overlapping_booking.status = 'DENIED'
      overlapping_booking.save!
    end

    bookings
  end

  belongs_to :user
  belongs_to :chair
end
