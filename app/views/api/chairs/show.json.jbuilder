json.extract! @chair, :id, :description, :lat, :lng, :address, :about, :accepting_guests
json.imageUrl @chair.image_url
json.user_id @chair.user.id
