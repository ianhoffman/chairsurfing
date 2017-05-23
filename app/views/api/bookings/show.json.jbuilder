json.startDate @booking.start_date
json.endDate @booking.end_date
json.user_id @booking.user_id
json.id @booking.id
json.chairId @booking.chair_id

json.chair do
  json.id @booking.chair.id
  json.owner @booking.chair.user_id
  json.description @booking.chair.description
  json.address @booking.chair.address
  json.about @booking.chair.about
  json.chair_img @booking.chair.image_url
end

json.user do
  json.id @booking.user.id
  json.firstName @booking.user.firstName
  json.lastName @booking.user.lastName
end
