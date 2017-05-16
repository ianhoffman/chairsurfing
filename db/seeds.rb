# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

chair_1 = Chair.create!(description: 'a nice comfy chair', lat: 37.756323, lng: -122.431598)
chair_2 = Chair.create!(description: 'a gnarled old chair', lat: 37.757554, lng: -122.465766)
chair_3 = Chair.create!(description: 'fine old wood; sea breeze', lat: 37.759699, lng: -122.435316)
chair_4 = Chair.create!(description: 'the og chair', lat: 37.765813, lng: -122.433351)
chair_5 = Chair.create!(description: 'mahogany', lat: 37.769387, lng: -122.429244)
chair_6 = Chair.create!(description: 'chair with annoying birds', lat: 37.773411, lng: -122.427254)
