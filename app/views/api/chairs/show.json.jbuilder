json.extract! @chair, :id, :description, :lat, :lng, :address, :about, :accepting_guests
json.imageUrl @chair.image_url
json.bookings @chair.bookings do |booking|
  json.id booking.id
  json.startDate booking.start_date
  json.endDate booking.end_date
  json.userId booking.user_id
  json.userFirstName booking.user.firstName
  json.userLastName booking.user.lastName
end
