json.extract! @chair, :id, :description, :lat, :lng, :address, :about, :accepting_guests
json.imageUrl @chair.image_url
json.bookings @chair.bookings do |booking|
  json.id booking.id
  json.startDate booking.start_date
  json.endDate booking.end_date
  json.userId booking.user_id
  json.userFirstName booking.user.firstName
  json.userLastName booking.user.lastName
  json.status booking.status
end

json.id @chair.id
json.description @chair.description
json.lat @chair.lat
json.lng @chair.lng
json.imageUrl @chair.image_url
json.about @chair.about
json.address @chair.address
json.accepting_guests @chair.accepting_guests
json.bookings @chair.bookings do |booking|
  json.id booking.id
  json.startDate booking.start_date
  json.endDate booking.end_date
  json.firstName booking.user.firstName
  json.lastName booking.user.lastName
  json.user_id booking.user_id
  json.status booking.status
end
