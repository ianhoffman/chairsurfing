**CHAIRSURFING**

ChairSurfing live

I've used CouchSurfing several times, so I was excited to create an app inspired by it. My version, ChairSurfing, is built with a Ruby on Rails backend, a PostgreSQL database, and a front end that utilizes both React.js and Redux.

**FEATURES & IMPLEMENTATION**

**CHAIR RENDERING & EDITING**

Chairs are stored in the database under a table with columns for user_id, location, image_url and description. When a user searches for chairs in a given location and/or by a given timeframe, an asynchronous GET request is sent to the backend API, which queries the database using ActiveRecords for chairs matching the given criterea. These chairs are then returned as JSON and enter the store.

Chairs are displayed in en masse in the SearchResults component, and may also be viewed one by one through their individual show pages (this would be the ChairShowPage). The UI is inspired by CouchSurfing, but not derivative of it: I was also inspired by commercial websites such as Amazon which sell, well, chairs.

**BOOKINGS**

Bookings are stored in the database under a table with columns for user_id, chair_id, state_date, end_date, and status. The status defaults to "PENDING", but bookings may also be "APPROVED" or "DENIED."

A request is sent to the backend to fetch bookings in three different cases: one, when the route to view an individual chair is hit (e.g., '/chairs/1') (this will return all bookings associated with the given chair two). Two, when a user is viewing their own bookings (e.g., '/profile/bookings') (in this second case, the API will return all bookings associated with that user). And lastly, when a user is viewing bookings made for their own chair ('/profile/your_chair') (this will return the same bookings as one would receive for 'chairs/1'--if '1' is your chair).

The bookings are displayed in different components: bookings for your own chair are displayed in yourChairBookings; bookings for an individual chair are actually not displayed, but are used to color certain periods of the calendar in 'rentForm', indicating that the chair is unavailable for those periods. Lastly, bookings are displayed in BookingsIndex (specifically, in BookingsItem).

**SEARCH**

Search is handled via a dropdown menu associated with NavBar (specifically, SearchBar). Users may search by location and date. One issue is that, given the huge array of locations and dates a recruiter could enter as search terms, it will be very hard for me to create enough seeds to handle all potential inputs; therefore, I plan to use some sort of prompt in the search bar to guide their searches. (I'll also render a funny message should they search something which has no results.) One other thing: it could be fun to use an API to fetch an image of whatever city they search, so that even if they search a random small town, I could render a cool image of it before telling them that it has no associated chairs.

Secondly, this search feature will use Google Maps' public API to render the exact location of a given chair in its show page. This means that users will also need to input their chair's location when they create or edit it.

**REVIEWS**

Users will be able to add reviews of chairs. These reviews are held in a join table (just like bookings), with foreign keys user_id and chair_id. This table will also hold a body (text).

They will be displayed in two places: the show page for a given chair (e.g., ReviewIndex), and also in YourChairReviewIndex.


**FUTURE DIRECTIONS FOR THE PROJECT**

In addition to the features outlined above, ChairSurfing can develop in several more directions:

**MESSAGING**

Users can message each other via open sockets or simply email in order to decide which bookings they'll approve.

**USER/HOST PROFILES**

It hasn't escaped me that on actual CouchSurfing, users are reviewed--not their couches. My implementation differs, but with more time, it'd be feasible to instead apply these reviews to users and hosts themselves, and to give them a detailed profile page which they can edit to include a picture.

**TOUR**

As my website will not match the full scope of CouchSurfing (it's just a time issue), it could be useful to create a tour for potential recruiters, so that they can easily see it's most exciting features.
