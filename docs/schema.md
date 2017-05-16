SCHEMA INFORMATION

**USERS**  

| NAME       | TYPE       | OTHER      |
| ---------- |:-----------| :----------|
| id         | integer    | not null, primary key |
| email      | string     | not null, indexed, unique |
| password_digest | string | not null |
| session_token | string | not null, indexed, unique |

**CHAIRS**  

| NAME       | TYPE       | OTHER      |
| ---------- |:-----------| :----------|
| id         | integer    | not null, primary key |
| user_id      | integer     | not null, indexed, unique, foreign key |
| description | string | not null |
| lat | float | not null |
| lng | float | not null |

**BOOKINGS**

| NAME       | TYPE       | OTHER      |
| ---------- |:-----------| :----------|
| id         | integer    | not null |
| user_id    | integer     | not null, indexed, unique, foreign key |
| chair_id | integer     | not null, indexed, unique, foreign key |
| start_date | date | not null |
| end_date | date | not null |

**Reviews**  

| NAME       | TYPE       | OTHER      |
| ---------- |:-----------| :----------|
| id         | integer    | not null |
| user_id    | integer     | not null, indexed, unique, foreign key |
| chair_id | integer     | not null, indexed, unique, foreign key |
| body | text | not null |
| date | date | not null |
