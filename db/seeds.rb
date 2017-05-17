# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

blue_armchair = Chair.create!(description: 'Plush blue armchair',
    lat: 37.768709,
    lng: -122.448687,
    image_url: 'http://res.cloudinary.com/dfuh8ucrc/image/upload/v1495050265/blue-armchair_slntig.jpg'
  )

black_stool = Chair.create!(description: 'Hardy black stool',
    lat: 37.757554,
    lng: -122.465766,
    image_url: 'http://res.cloudinary.com/dfuh8ucrc/image/upload/v1495050262/black-stool_jzrddh.jpg'
  )

fancy_chair = Chair.create!(description: 'Ornate black armchair',
    lat: 37.757223,
    lng: -122.451777,
    image_url: 'http://res.cloudinary.com/dfuh8ucrc/image/upload/v1495050259/fancy-chair_admhqa.jpg'
  )

basic_chair = Chair.create!(description: 'Basic black chair',
    lat: 37.760247,
    lng: -122.424097,
    image_url: 'http://res.cloudinary.com/dfuh8ucrc/image/upload/v1495050259/basic-black-chair_q9wl7q.jpg'
  )


furry_chair = Chair.create!(description: 'Ridiculous furry chair',
    lat: 37.751984,
    lng: -122.478835,
    image_url: 'http://res.cloudinary.com/dfuh8ucrc/image/upload/v1495050253/furry-chair_onrsch.jpg'
  )

swivel_chair = Chair.create!(description: 'Sleek black desk-chair',
    lat: 37.796527,
    lng: -122.400042,
    image_url: 'http://res.cloudinary.com/dfuh8ucrc/image/upload/v1495050253/black-swivel-chair_nkqvwl.jpg'
  )

  modern_beanbag = Chair.create!(description: 'Modernist beanbag',
  lat: 37.788442,
  lng: -122.408244,
  image_url: 'http://res.cloudinary.com/dfuh8ucrc/image/upload/v1495050257/modern-beanbag_fwzzhh.jpg'
  )

  modern_armchair = Chair.create!(description: 'Avante-garde armchair',
  lat: 37.786163,
  lng: -122.393535,
  image_url:
  'http://res.cloudinary.com/dfuh8ucrc/image/upload/v1495050257/modern-armchair_be2i4p.jpg'
  )

  racing_chair = Chair.create!(description: 'Racecar-inspired swivel-chair',
  lat: 37.791441,
  lng: -122.394093,
  image_url: 'http://res.cloudinary.com/dfuh8ucrc/image/upload/v1495050253/racing-chair_ou4tkd.jpg'
  )
