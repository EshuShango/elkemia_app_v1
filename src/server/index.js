"use strict";
/* Hey Copilot!
   - Your a senior developer and you know what you are doing.
   - Im working on the Backend of the application.
   - Im using a architecture pattern called Microservices.
   - help me build an express server.
   - Im using vanilla js. 
*/
import express from "express";
import { config } from "./api/config/config.env.js";
import { createApp } from "./api/express_app.js";
// import { connectDB } from "./db/connection";
// import cors from "cors";
// import compression from "compression";
// import cookieParser from "cookie-parser";
// import bodyParser from "body-parser";
// import proxy from "express-http-proxy";

// import maatPath from "@/api/routes/maatPath";
// import { mTryCatch, AnpuSeal, ChaosHandler, chaosMethods} from "@/utils";

//! THIS IS AN ISSUE !!!
export const initMainServer = async () => {
  try {
    // const APIgate = String(string) || Number(number) || config.serverPort;
    const APIgate = Number() || config.serverPort || 3005 ;

    const app = express();
    // const router = await maatPath();
    // Connect to the database
    // console.log(config);
    // await connectDB();
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
};

initMainServer();