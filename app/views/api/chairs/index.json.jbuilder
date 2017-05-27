@chairs.each do |chair|
  json.set! chair.id do
    json.extract! chair, :id, :description, :lat, :lng, :address, :about, :accepting_guests
    json.imageUrl chair.image_url
  end
end
