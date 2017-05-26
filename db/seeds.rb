# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#

one = User.create!(email: 'Jane@Doe.com', password: 'password', first_name: 'Jane', last_name: 'Doe')

two = User.create!(email: 'ianhoffman10@gmail.com', password: 'password', first_name: 'Ian', last_name: 'Hoffman')

three = User.create!(email: 'will@schwartz.com', password: 'password', first_name: 'Will', last_name: 'Shakespeare')

four = User.create!(email: 'alex@dumas.com', password: 'password', first_name: 'Alex', last_name: 'Dumas')

five = User.create!(email: 'ts@eliot.com', password: 'password', first_name: 'T.S.', last_name: 'Eliot')

six = User.create!(email: 'marcel@proust.com', password: 'password', first_name: 'Marcel', last_name: 'Proust')

seven = User.create!(email: 'emily@dickinson.com', password: 'password', first_name: 'Emily', last_name: 'Dickinson')

eight = User.create!(email: 'gabriel@garcia_marquez.com', password: 'password', first_name: 'Gabriel', last_name: 'Garcia Marquez')

nine = User.create!(email: 'steph@curry.com', password: 'password', first_name: 'Steph', last_name: 'Curry')

ten = User.create!(email: 'ed@norton.com', password: 'password', first_name: 'Ed', last_name: 'Norton')

eleven = User.create!(email: 'lisa@simpson.com', password: 'password', first_name: 'Lisa', last_name: 'Simpson')

twelve = User.create!(email: 'omar@little.com', password: 'password', first_name: 'Omar', last_name: 'Little')

thirteen = User.create!(email: 'thomas@carcetti.com', password: 'password', first_name: 'Thomas', last_name: 'Carcetti')

fourteen = User.create!(email: 'virginia@woolf.com', password: 'password', first_name: 'Virginia', last_name: 'Woolf')

fifteen = User.create!(email: 'bugs@bunny.com', password: 'password', first_name: 'Bugs', last_name: 'Bunny')

sixteen = User.create!(email: 'guy@fieri.com', password: 'password', first_name: 'Guy', last_name: 'Fieri')

seventeen = User.create!(email: 'brandon@mccartney.com', password: 'password', first_name: 'Brandon', last_name: 'McCartney')

eighteen = User.create!(email: 'vince@staples.com', password: 'password', first_name: 'Vincent', last_name: 'Staples')

nineteen = User.create!(email: 'janelle@monae.com', password: 'password', first_name: 'Janelle', last_name: 'Monae')

twenty = User.create!(email: 'king@arthur.com', password: 'password', first_name: 'King', last_name: 'Arthur')
#
# chair1 = Chair.create!(
#   description: 'Plush blue armchair',
#   lat: 37.762096,
#   lng: -122.434760,
#   image_url: "https://res.cloudinary.com/dfuh8ucrc/image/upload/v1495050265/blue-armchair_slntig.jpg",
#   user_id: one.id,
#   address: "429 Castro St, San Francisco, CA 94114",
#   about: "A classic old chair in a beautiful old theater. Definitely a must-sit-in for anybody visiting San Francisco.",
#   accepting_guests: true
# )
#
# chair2 = Chair.create!(
#   description: "Hardy black stool",
#   lat: 37.780506,
#   lng: -122.513667,
#   image_url: "https://res.cloudinary.com/dfuh8ucrc/image/upload/v1495050262/black-stool_jzrddh.jpg",
#   user_id: two.id,
#   address: "1004 Point Lobos Ave, San Francisco, CA 94121",
#   about: "Amazing views of the Pacific from this rather uncomfortable stool. Perfect for the Spartans among us, from here one can contemplate infinitude while perfecting their posture.",
#   accepting_guests: true
# )
#
# chair3 = Chair.create!(
#   description: "Wide Blue Chair",
#   lat: 37.769886,
#   lng: -122.476711,
#   image_url: "https://res.cloudinary.com/dfuh8ucrc/image/upload/v1495650386/snmqw53gpel8mzujpkei.jpg",
#   user_id: three.id,
#   address: "John F Kennedy Dr & Martin Luther King Jr. Drive, San Francisco, CA 94118",
#   about: "Float on Golden Gate Park's magnificent Swan Lake while you relax in style in this strangely box-shaped chair. Sip a martini or something, and watch the clouds drift by overhead--and in the water below you.",
#   accepting_guests: true
# )
#
# chair4 = Chair.create!(
#   description: "Hot Pink Chair",
#   lat: 37.760471,
#   lng: -122.418818,
#   image_url: "https://res.cloudinary.com/dfuh8ucrc/image/upload/v1495604197/ain1tiabqphbbnsuln49.jpg",
#   user_id: four.id,
#   address: "3372 19th St, San Francisco, CA 94110",
#   about: "It may seem strange to sit in a chair among such a menagerie of dancing bodies, yet, in this hot pink chair, you won't feel out of place at all. In fact, this is exactly where you NEED to be.",
#   accepting_guests: true
# )
#
# chair5 = Chair.create!(
#   description: "Neutral Tones Chair",
#   lat: 37.760471,
#   lng: -122.418818,
#   image_url: "https://res.cloudinary.com/dfuh8ucrc/image/upload/v1495582935/bl8xztowm80s3iyaxbun.jpg",
#   user_id: five.id,
#   address: "2889 Mission St, San Francisco, CA 94110",
#   about: "Con: this chair is pretty boring. Pro: you get to eat really good tacos while you sit in it. Con: you can't spill salsa on this chair, or I will sue you. Pro: just spill the salsa and run.",
#   accepting_guests: false
# )
#
# chair6 = Chair.create!(
#   description: "Black throne-like armchair",
#   lat: 37.760590,
#   lng: -122.421307,
#   image_url: "https://res.cloudinary.com/dfuh8ucrc/image/upload/v1495050259/fancy-chair_admhqa.png",
#   user_id: six.id,
#   address: "777 Valencia St, San Francisco, CA 94110",
#   about: "I know it's kind of taboo to admit this, but you know what makes a concert even better? Sitting down. And in this chair, not only will you be sitting, you'll be sitting like a king.",
#   accepting_guests: false
# )
#
# chair7 = Chair.create!(
#   description: "Straight-backed wooden chair",
#   lat: 37.791288,
#   lng: -122.393702,
#   image_url: "https://res.cloudinary.com/dfuh8ucrc/image/upload/v1495572289/yk5np5v897mlgdtlho6e.jpg",
#   user_id: seven.id,
#   address: "160 Spear St, San Francisco, CA 94105",
#   about: "A very straightforward, no-nonsense sort of chair. Good to eat dinner in, or simply do some programming. I wouldn't recommend cozying up in it, though-it's rather hard.",
#   accepting_guests: true
# )
#
# chair8 = Chair.create!(
#   description: "Basic black chair",
#   lat: 37.800817,
#   lng: -122.398621,
#   image_url: "https://res.cloudinary.com/dfuh8ucrc/image/upload/v1495050259/basic-black-chair_q9wl7q.jpg",
#   user_id: eight.id,
#   address: "Pier 15, The Embarcadero & Green St., San Francisco, CA 94111",
#   about: "This chair washed up years ago on Pier Fifteen, and was easily incorporated into the newly built Exploratorium. It's a lifesaver while you're children are off looking at some weird contraption; you can sit in it and pretend you yourself are a child at the Exploratorium for the first time many years ago.",
#   accepting_guests: true
# )
#
# chair9 = Chair.create!(
#   description: "Modernist beanbag",
#   lat: 37.785724,
#   lng: -122.401044,
#   image_url: "http://res.cloudinary.com/dfuh8ucrc/image/upload/v1495050257/modern-beanbag_fwzzhh.jpg",
#   user_id: nine.id,
#   address: "151 3rd St, San Francisco, CA 94103",
#   about: "The classic beanbag gets an avante-garde update with this uniquely-pointed, elegantly-styled bag. The beans within were harvested slowly, over many years, by monks living in the far reaches of Patagonia.",
#   accepting_guests: true
# )
#
# chair10 = Chair.create!(
#   description: "Avante-garde armchair",
#   lat: 37.771443,
#   lng: -122.468701,
#   image_url: "https://res.cloudinary.com/dfuh8ucrc/image/upload/v1495050257/modern-armchair_be2i4p.jpg",
#   user_id: ten.id,
#   address: "50 Hagiwara Tea Garden Dr, San Francisco, CA 94118",
#   about: "A beautiful update to the rather stale old armchair, this leathery loveseat looks like it's about to tip over but, we hope, won't.",
#   accepting_guests: true
# )
#
# chair11 = Chair.create!(
#   description: "Very furry armchair",
#   lat: 37.802175,
#   lng: -122.418784,
#   image_url: "http://res.cloudinary.com/dfuh8ucrc/image/upload/v1495050253/furry-chair_onrsch.jpg",
#   user_id: eleven.id,
#   address: "Lombard St, San Francisco, CA 94133",
#   about: "No sheep were harmed in the making of this chair.",
#   accepting_guests: true
# )
#
# chair12 = Chair.create!(
#   description: "Racecar-themed chair",
#   lat: 37.795213,
#   lng: -122.402897,
#   image_url: "https://res.cloudinary.com/dfuh8ucrc/image/upload/v1495050253/racing-chair_ou4tkd.jpg",
#   user_id: twelve.id,
#   address: "600 Montgomery St, San Francisco, CA 94111",
#   about: "It may be in a building that's slowly tipping over, but this chair remains probably the closest you'll ever come to sitting in a racecar. No offense.",
#   accepting_guests: true
# )
#
# chair13 = Chair.create!(
#   description: "Pretty normal swivel-chair",
#   lat: 37.789925,
#   lng: -122.396868,
#   image_url: "http://res.cloudinary.com/dfuh8ucrc/image/upload/v1495050253/black-swivel-chair_nkqvwl.jpg",
#   user_id: thirteen.id,
#   address: "415 Mission St, San Francisco, CA 94105",
#   about: "We've all sat in a chair like this at least once, and we all will again. For hours and hours. While the screen slowly bores into our minds...",
#   accepting_guests: false
# )
#
# chair14 = Chair.create!(
#   description: "Elegant adult stroller",
#   lat: 37.784838,
#   lng: -122.402779,
#   image_url: "https://res.cloudinary.com/dfuh8ucrc/image/upload/v1495749234/Stroller_frigzr.jpg",
#   user_id: fourteen.id,
#   address: "750 Howard St, San Francisco, CA 94103",
#   about: "The dream.",
#   accepting_guests: true
# )
#
# chair15 = Chair.create!(
#   description: "Vintage pleather armchair",
#   lat: 37.768893,
#   lng: -122.419384,
#   image_url: "https://res.cloudinary.com/dfuh8ucrc/image/upload/v1495749234/LeatherArmchair_mckcgw.jpg",
#   user_id: fifteen.id,
#   address: "161 Erie St, San Francisco, CA 94103",
#   about: "Like a good flannel shirt or an original Beatles' LP, this chair is well-worn but much-loved. Sit in it for a day, an hour, a year—you won't soon forget, either way.",
#   accepting_guests: true
# )
#
# chair16 = Chair.create!(
#   description: "Comfortable modern throne",
#   lat: 37.768893,
#   lng: -122.419384,
#   image_url: "https://res.cloudinary.com/dfuh8ucrc/image/upload/v1495749234/Iron_throne_uvttwc.png",
#   user_id: sixteen.id,
#   address: "1377 Great Hwy, San Francisco, CA 94122",
#   about: "There is absolutely nothing odd about this chair. Very comfortable, tremendously comfortable-one might say-you can sit in it and watch the waves come in. No one will want to overthrow you. Absolutely no one.",
#   accepting_guests: true
# )
#
# chair17 = Chair.create!(
#   description: "One in the palm chair",
#   lat: 37.797621,
#   lng: -122.431768,
#   image_url: "https://res.cloudinary.com/dfuh8ucrc/image/upload/v1495749234/HandChair_ljjspj.jpg",
#   user_id: seventeen.id,
#   address: "1980 Union St, San Francisco, CA 94123",
#   about: "A unique sitting experience, what this chair lacks in comfort it makes up for in originality.",
#   accepting_guests: true
# )
#
# chair18 = Chair.create!(
#   description: "Safe floating chair",
#   lat: 37.814160,
#   lng: -122.391993,
#   image_url: "https://res.cloudinary.com/dfuh8ucrc/image/upload/v1495749233/Floating_Chair_h0kmul.jpg",
#   user_id: eighteen.id,
#   address: "San Francisco Bay, California",
#   about: "Fancy a dip? In this chair, you can drift through the beauitful SF bay, just getting your feet a bit wet while sunning yourself and listening to the seals call. Oh, and there are absolutely no sharks. None.",
#   accepting_guests: true
# )
#
# chair19 = Chair.create!(
#   description: "Batboy children's seat",
#   lat: 37.778574,
#   lng: -122.389245,
#   image_url: "https://res.cloudinary.com/dfuh8ucrc/image/upload/v1495749234/BatmanChair_whochy.jpg",
#   user_id: nineteen.id,
#   address: "24 Willie Mays Plaza, San Francisco, CA 94107",
#   about: "Bayboy may be gone from the city--for now--but his chair remains! If you need to keep a child entertained for a few hours, this is a sure winner.",
#   accepting_guests: true
# )
#
# chair20 = Chair.create!(
#   description: "Adirondack Chair",
#   lat: 37.773371,
#   lng: -122.441999,
#   image_url: "https://res.cloudinary.com/dfuh8ucrc/image/upload/v1495749234/Adirondack_rgcqdm.jpg",
#   user_id: twenty.id,
#   address: "1400 Fell St, San Francisco, CA 94117",
#   about: "Perfect for people watching on the occasional warm SF day. Between sitting sessions, stroll over to the Haight for some key thrifting.",
#   accepting_guests: true
# )
#
# Booking.create!(
#   user_id: one.id,
#   chair_id: chair2.id,
#   start_date: "2017-09-02",
#   end_date: "2017-09-04"
# )
#
# Booking.create!(
#   user_id: one.id,
#   chair_id: chair3.id,
#   start_date: "2017-09-08",
#   end_date: "2017-09-09"
# )
#
# Booking.create!(
#   user_id: one.id,
#   chair_id: chair4.id,
#   start_date: "2017-09-13",
#   end_date: "2017-09-17"
# )
#
# Booking.create!(
#   user_id: one.id,
#   chair_id: chair5.id,
#   start_date: "2017-10-14",
#   end_date: "2017-10-18"
# )
#
# Booking.create!(
#   user_id: one.id,
#   chair_id: chair6.id,
#   start_date: "2017-10-19",
#   end_date: "2017-10-20"
# )
#
# Booking.create!(
#   user_id: one.id,
#   chair_id: chair7.id,
#   start_date: "2017-10-21",
#   end_date: "2017-10-22"
# )
#
# Booking.create!(
#   user_id: two.id,
#   chair_id: chair3.id,
#   start_date: "2017-09-02",
#   end_date: "2017-09-05"
# )
#
# Booking.create!(
#   user_id: three.id,
#   chair_id: chair4.id,
#   start_date: "2017-09-20",
#   end_date: "2017-09-22"
# )
#
# Booking.create!(
#   user_id: four.id,
#   chair_id: chair5.id,
#   start_date: "2017-10-25",
#   end_date: "2017-10-26"
# )
#
# Booking.create!(
#   user_id: two.id,
#   chair_id: chair8.id,
#   start_date: "2017-07-12",
#   end_date: "2017-07-15"
# )
#
# Booking.create!(
#   user_id: two.id,
#   chair_id: chair9.id,
#   start_date: "2017-08-03",
#   end_date: "2017-08-09"
# )
#
# Review.create!(
#   user_id: two.id,
#   chair_id: chair1.id,
#   rating: 5,
#   body: 'An absolutely wonderful chair! Would sit in again, times ten!'
# )
#
# Review.create!(
#   user_id: three.id,
#   chair_id: chair1.id,
#   rating: 5,
#   body: 'I say this chair is very comfortable / It is so plush and wonderful to sleep in!'
# )
#
# Review.create!(
#   user_id: twelve.id,
#   chair_id: chair1.id,
#   rating: 5,
#   body: 'Did you know that this chair was built in 1996 in a factory in Kansas?'
# )
#
# Review.create!(
#   user_id: one.id,
#   chair_id: chair1.id,
#   rating: 5,
#   body: 'Did you know that this chair was built in 1996 in a factory in Kansas?'
# )
#
# Review.create!(
#   user_id: nine.id,
#   chair_id: chair2.id,
#   rating: 2,
#   body: 'A very uncomfortable chair, 7 out of 7 would not repeat stay.'
# )
#
# Review.create!(
#   user_id: twelve.id,
#   chair_id: chair19.id,
#   rating: 4,
#   body: 'One of the best chairs on the whole west side, yo!'
# )
#
# Review.create!(
#   user_id: thirteen.id,
#   chair_id: chair4.id,
#   rating: 3,
#   body: 'I had a pleasant night sitting on this chair, sipping tea and reading Little Bo Peep.'
# )
#
# Review.create!(
#   user_id: ten.id,
#   chair_id: chair6.id,
#   rating: 4,
#   body: 'A very good chair. Among the best. And yet. Lacking in something. That essential. Spark.'
# )
#
# Review.create!(
#   user_id: seventeen.id,
#   chair_id: chair7.id,
#   rating: 5,
#   body: 'This chair loves you!'
# )
#
# Review.create!(
#   user_id: twenty.id,
#   chair_id: chair4.id,
#   rating: 5,
#   body: 'Quite the chair, lads, quite the chair!'
# )




# blue_armchair = Chair.create!(
#     description: 'Plush blue armchair',
#     lat: 37.768709,
#     lng: -122.448687,
#     image_url: 'https://res.cloudinary.com/dfuh8ucrc/image/upload/v1495050265/blue-armchair_slntig.jpg',
#     user_id: 1,
#     address: '1501 Waller St, San Francisco, CA 94117, USA',
#     about: 'Once you sink into this plush blue armchair, you won\'t want to get up for DAYS. Sip some wine and look out the window contemplatively and, before you know it, you\'ll be around 65.'
#   );
#
# black_stool = Chair.create!(description: 'Hardy black stool',
#     lat: 37.757554,
#     lng: -122.465766,
#     image_url: 'https://res.cloudinary.com/dfuh8ucrc/image/upload/v1495050262/black-stool_jzrddh.jpg'
#   )
#
# fancy_chair = Chair.create!(description: 'Ornate black armchair',
#     lat: 37.757223,
#     lng: -122.451777,
#     image_url: 'https://res.cloudinary.com/dfuh8ucrc/image/upload/v1495050259/fancy-chair_admhqa.jpg'
#   )
#
# basic_chair = Chair.create!(description: 'Basic black chair',
#     lat: 37.760247,
#     lng: -122.424097,
#     image_url: 'https://res.cloudinary.com/dfuh8ucrc/image/upload/v1495050259/basic-black-chair_q9wl7q.jpg'
#   )
#
#
# furry_chair = Chair.create!(description: 'Ridiculous furry chair',
#     lat: 37.751984,
#     lng: -122.478835,
#     image_url: 'https://res.cloudinary.com/dfuh8ucrc/image/upload/v1495050253/furry-chair_onrsch.jpg'
#   )
#
# swivel_chair = Chair.create!(description: 'Sleek black desk-chair',
#     lat: 37.796527,
#     lng: -122.400042,
#     image_url: 'https://res.cloudinary.com/dfuh8ucrc/image/upload/v1495050253/black-swivel-chair_nkqvwl.jpg'
#   )
#
#   modern_beanbag = Chair.create!(description: 'Modernist beanbag',
#   lat: 37.788442,
#   lng: -122.408244,
#   image_url: 'https://res.cloudinary.com/dfuh8ucrc/image/upload/v1495050257/modern-beanbag_fwzzhh.jpg'
#   )
#
#   modern_armchair = Chair.create!(description: 'Avante-garde armchair',
#   lat: 37.786163,
#   lng: -122.393535,
#   image_url:
#   'https://res.cloudinary.com/dfuh8ucrc/image/upload/v1495050257/modern-armchair_be2i4p.jpg'
#   )
#
#   racing_chair = Chair.create!(description: 'Racecar-inspired swivel-chair',
#   lat: 37.791441,
#   lng: -122.394093,
#   image_url: 'https://res.cloudinary.com/dfuh8ucrc/image/upload/v1495050253/racing-chair_ou4tkd.jpg'
#   )
  #
