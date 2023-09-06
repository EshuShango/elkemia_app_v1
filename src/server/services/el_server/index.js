"use strict";
/* Hey Copilot!
   - Your a senior developer and you know what you are doing.
   - Im working on the Backend of the application.
   - Im using a architecture pattern called Microservices.
   - help me build an express server.
   - Im using vanilla js. 
*/
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

// import { config } from "./api/config/config.env.js";
// import { createApp } from "./api/express_app.js";

const PORT = process.env.PORT || 8003;
export async function initElementServer(app = express()) {

  try {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(
      cors({
        credentials: true,
      })
    );

    app.use("/", (req, res, next ) => {
      return res.status(200).json({ message: "C🌏💧💨🔥 ElementalServer says Hello" });
    });

    app.listen(PORT, () => {
      console.log(`Server is running on port http://localhost:${PORT}`);
    });
  } catch (err) {
    //? implement util for this ?
    if (err instanceof Error) {
      console.error("Failed to start the server:", err.message);
      process.exit(1);
    }
  }
}

initElementServer();
