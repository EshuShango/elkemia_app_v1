// import express, { Request, Response, NextFunction } from "express";
import express from "express";
import {config}  from "./config/config.env.js";
import proxy from "express-http-proxy";
// import { connectDB } from "./db/connection";
import cors from "cors";
import bodyParser from "body-parser";

export const createApp = async (app = express.application) => {
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
  app.use("/users", proxy(config.userUrl));
  app.use("/auth", proxy(config.authUrl));
  app.use("/elements", proxy(config.el_Url));

  app.use("/", (req, res, next) => {
    return res.status(200).json({ message: "Server says What up do !!!🦫" });
  });

  return app;
};
createApp(express());
