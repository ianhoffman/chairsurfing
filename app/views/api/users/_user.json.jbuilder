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
  end
else
  json.chair 'null'
end
