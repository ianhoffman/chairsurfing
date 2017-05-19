@chairs.each do |chair|
  json.set! chair.id do
    json.extract! chair, :id, :description, :lat, :lng, :address, :about
    json.imageUrl chair.image_url
  end
end
