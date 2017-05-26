# Repose  

[Live](https://chairsurfing.herokuapp.com/#/)

In the fast-growing urban metropolis that is 21st century San Francisco, urban space is at a premium. Repose is a web app created to meet such demand, empowering users to host each other without sacrificing that most precious commodity: space. Built with Ruby on Rails, React/Redux and PostgreSQL, Repose allows its users to sleep on fine chairs ranging from elegant leather armchairs to straight-backed wooden chairs.


## Technologies

In the typical MVC framework, a user makes a request to a server, which responds with content (a view). Repose, and indeed all applications built with React.js, slightly modify the typical MVC approach: they hit the backend server, in this case built with Ruby on Rails and running a PostgreSQL database, for data which is served up as JSON (Javascript Object Notation). This JSON is then parsed on the frontend and used to build React components, which render as HTML. The backend—Rails—is responsible for serving up these views using a RESTful API.
