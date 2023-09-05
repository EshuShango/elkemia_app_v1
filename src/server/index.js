"use strict";
/* Hey Copilot!
   - Your a senior developer and you know what you are doing.
   - Im working on the Backend of the application.
   - Im using a architecture pattern called Microservices.
   - help me build an express server.
   - Im using vanilla js. 
*/
"use strict"; 
import express from "express";
import { config } from "./api/config/config.env.js";
import { createApp } from "./api/express_app.js";

export async function initMainServer() {
  try {
    const APIgate = (Number = config.serverPort) || 3005;

    const app = express();

    await createApp(app);

    app.listen(APIgate, () => {
      console.log(`Server is running on port http://localhost:${APIgate}`);
    });
  } catch (err) {
    //? implement util for this ?
    if (err instanceof Error) {
      console.error("Failed to start the server:", err.message);
      process.exit(1);
    }
  }
}

initMainServer();
