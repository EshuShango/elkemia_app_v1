"use strict";
/* Hey Copilot!
   - Your a senior developer and you know what you are doing.
   - Im working on the Backend of the application.
   - Im using a architecture pattern called Microservices.
   - help me build an express server.
   - Im using vanilla js. 
*/
import { Router } from "express";
// import {
//   mTryCatch,
//   mTryCatchAsync,
//   ChaosHandler,
//   chaosMethods,
//   AnpuSeal,
//   DivineSynergy,
// } from "@/utils";

/**
 * Creates and configures the main router for the application.
 * This router orchestrates paths to various chambers of wisdom and balance.
 * It orchestrates paths to various chambers, each representing a facet of harmonious existence.
 * @async  remove if not async, or add async if you need it.
 * @returns {Router} The configured express router.
 */
export default function (router = Router()) {
  // Create a new instance of the Express Router.
  const router = Router();

  // // Create/Update/Delete_card handler
  // CreateUpdateDelete(router);
  // // Search/Find_card handler
  // SearchFind(router);
  // // user logic handler
  // userLogic(router);
  // //auth user logic handler
  // authUser(router)

  return router;
};

// loggingMiddleware.js

/**
 * Middleware function that logs the HTTP method and URL for each incoming request and then passes the request to the next middleware function.
 * @param {Express.Request} req - The express request object.
 * @param {Express.Response} res - The express response object.
 * @param {Function} next - The next middleware function.
 */
export const logReqResNext = (req, res, next) => {
  //! WRITE YOUR OWN LOGIC HERE.
  console.log(`${req.method} ${req.url}`);
  next();
};
