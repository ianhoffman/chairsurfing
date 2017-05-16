**COMPONENT HIERARCHY**

ChairFormContainer
* ChairFormContainer

ChairIndex

ChairIndexItem

ChairFormComponent
* ChairForm

ChairShowContainer
* ChairShow

FilterForm

GreetingContainer
* Greeting

SearchContainer
* Search

SessionFormContainer
* SessionForm


**ROUTES**

| PATH                   | COMPONENT            |
| ---------------------- |:-------------------- |
| /bookings              |                      |
| /chair/:id/edit        |                      |
| /chairs/new            | ChairFormComponent   |
| /                      | SearchContainer      |
| /login                 | SessionFormContainer
| /chairs/:chair_id      | ShowChairContainer
