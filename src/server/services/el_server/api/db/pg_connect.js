

"use strict";
/* Hey Copilot!
   - Your a senior developer and you know what you are doing.
   - Im working on the Backend of the application.
   - Im using a architecture pattern called Microservices.
   - help me build an express server.
   - Im using vanilla js. 
    - Im using postgres as my database.
    - I need to create a database connection via postgres.js.
*/
import postgres from 'postgres'

//* Use environment variables to connect to the database.
const sql = postgres('postgres://username:password@host:port/database', {
  host                 : '',            // Postgres ip address[s] or domain name[s]
  port                 : 5432,          // Postgres server port[s]
  database             : '',            // Name of database to connect to
  username             : '',            // Username of database user
  password             : '',            // Password of database user
  // ...and more
})
process.env.NODE_ENV === 'production'
? // "Unless you're using a Private or Shield Heroku Postgres database, Heroku Postgres does not currently support verifiable certificates"
  // https://help.heroku.com/3DELT3RK/why-can-t-my-third-party-utility-connect-to-heroku-postgres-with-ssl
  postgres({ ssl: { rejectUnauthorized: false } })
: postgres()

export default sql