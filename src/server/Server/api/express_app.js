"use strict";
/* Hey Copilot!
   - Your a senior developer and you know what you are doing.
   - Im working on the Backend of the application.
   - Im using a architecture pattern called Microservices.
   - help me build an express server.
   - Im using vanilla js. 
*/
import express from "express";
import {config}  from "./config/config.env.js";
import proxy from "express-http-proxy";
import cors from "cors";
import bodyParser from "body-parser";


export async function createApp(app = express.application) {
  //* Database

  // await connectMongoDB();
  // await connectPostgresDB();

  //* Middleware
  //? which of these are !necessary?
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(
    cors({
      credentials: true,
    })
  );

  //* Routes
  // app.use("/users", proxy(config.userUrl));
  // app.use("/auth", proxy(config.authUrl));
  app.use("/elements", proxy(config.el_Url));
  
  //* TEST:
  app.use("/", (req, res, next) => {
    return res.status(200).json({ message: "Server says What up do !!!🦫" });
  });

  return app;
}
createApp(express());
