json.extract! @booking, :id, :user_id, :chair_id, :start_date, :end_date

json.chair do
  json.id @booking.chair.id
  json.owner @booking.chair.user_id
  json.description @booking.chair.description
  json.about @booking.chair.about
  json.chair_img @booking.chair.image_url
end

json.user do
  json.id @booking.user.id
  json.firstName @booking.user.firstName
  json.lastName @booking.user.lastName
end
