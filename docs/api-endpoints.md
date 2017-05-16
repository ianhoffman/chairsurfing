**HTML API**
- ROOT -- GET / - loads React web app

**JSON API**

*USERS*
- POST /api/users

*SESSION*
- POST /api/session
- DELETE /api/session

*CHAIRS*
- GET /api/chairs
- chairs: index/search:
  - accepts city_name query parameter;  
  - accepts dates query parameter
- POST /api/chairs
- GET /api/chairs/:id
- PATCH /api/chairs/:id
- DELETE /api/chairs/:id

*BOOKINGS*
- GET /api/chairs/:chair_id/bookings
- POST /api/bookings
- DELETE /api/bookings

*REVIEWS*
- GET /api/chairs/:chair_id/reviews
- POST /api/reviews
- DELETE /api/reviews
