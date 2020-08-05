# Indezone Journal

A daily performance journal using IBM's Watson to scan text entries and provide objective personality insights for the user.

Overhaul of indezone-app repository (a team project), to implement major bug fixes and missing features.

## Bug Fixes
- fix crash on multiple login attempts with empty input
- remove redundant database tables interfering with Postgres Inserts

## New Features Implemented
- registration to create new user account & new login
- move user validation from client to server side for security
- password encryption using bcrypt
- user level based on consistent daily journal entries
- separate question sets rendered morning and evening
- questions displayed based on user mood & motivation
- lessons on mindfulness and productivity delivered with each new level


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

  - Content: Adobe Illustratory & Photoshop
  - ERD: Lucidchart
  - Mockup & prototype: Figma
