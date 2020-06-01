# Indezone Journal

A performance journal using IBM's Watson to scan text entries and provide objective insight on who you are.

Overhaul of indezone-app repository (a team project), to implement major bug fixes and missing features.

## Bug Fixes
- fix crash on multiple login attempts with empty input
- remove redundant database tables & columns interfering with Postgres Inserts

## New Features Implemented
- registration form and account creation for new users
- move user validation from client to server side
- replace user level with points system based on total word count
- replace @handle with user's name


## Dependencies

   1. React
   2. Express
   3. axios
   4. saas
   5. Nodemon
   6. sequelize
   7. sequelize-cli
   8. pg

## Design tools

  - ERD: Lucidchart
  - Mockup & prototype: Figma
