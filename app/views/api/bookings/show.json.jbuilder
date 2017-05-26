json.id @booking.id
json.startDate @booking.start_date
json.endDate @booking.end_date
json.status @booking.status

json.chair do
  json.description @booking.chair.description
  json.address @booking.chair.address
end

json.user do
  json.firstName @booking.user.first_name
  json.lastName @booking.user.last_name
end
