# Repose  

[Live](https://chairsurfing.herokuapp.com/#/)

In the fast-growing urban metropolis that is 21st century San Francisco, urban space is at a premium. Repose is a web app created to meet such demand, empowering users to host each other without sacrificing that most precious commodity: space. Built with Ruby on Rails, React/Redux and PostgreSQL, Repose allows its users to sleep on fine chairs ranging from elegant leather armchairs to straight-backed wooden chairs.


## Technologies

In the typical MVC framework, a user makes a request to a server, which responds with content (a view). Repose, and indeed all applications built with React.js, slightly modify the typical MVC approach: they hit the backend server, in this case built with Ruby on Rails and running a PostgreSQL database, for data which is served up as JSON (Javascript Object Notation). This JSON is then parsed on the frontend and used to build React components, which render as HTML. The backend—Rails—is responsible for serving up these views using a RESTful API.

# Features and Implementation

## Creating, Booking, and Reviewing

On Repose, users may 'create' their own chairs; i.e., they may post them on the app for other users to book. They may also book each other's chairs and approve and deny bookings for their own chair. Lastly, they may leave reviews on other chairs.

Each user can have a maximum of one chair. Users may edit their chair; once created, Repose uses the Google Maps Geocoding API to retrieve the exact latitude and longitude for the address given by a user. It uses Cloudinary's API to host images of users' chairs.

Repose allows users to search for chairs by keyword. To avoid making unnecessary server requests, it only searches for chairs within a map's current bounds. (It updates whenever those bounds change.)

```


```
