json.extract! user, :id, :email, :firstName, :lastName

if user.chair
  json.chair do
    json.id user.chair.id
    json.description user.chair.description
    json.lat user.chair.lat
    json.lng user.chair.lng
    json.imageUrl user.chair.image_url
    json.about user.chair.about
    json.address user.chair.address
    json.accepting_guests user.chair.accepting_guests
    json.bookings user.chair.bookings do |booking|
      json.id booking.id
      json.startDate booking.start_date
      json.endDate booking.end_date
      json.firstName booking.user.firstName
      json.lastName booking.user.lastName
      json.user_id booking.user_id
      json.status booking.status
    end
  end
else
  json.chair 'null'
end

if user.bookings
  json.bookings user.bookings do |booking|
    json.id booking.id
    json.startDate booking.start_date
    json.endDate booking.end_date
    json.chair do
      json.id booking.chair.id
      json.description booking.chair.description
      json.address booking.chair.address
    end
  end
end
