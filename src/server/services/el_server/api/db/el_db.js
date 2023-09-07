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

const sql = postgres({ /* options */ }) // will use psql environment variables

export default sql