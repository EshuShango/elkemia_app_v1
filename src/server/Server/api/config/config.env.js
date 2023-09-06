import dotenv from "dotenv";

dotenv.config();
export const config = {
  userUrl: process.env.USER_URL || "http://localhost:8001",
  authUrl: process.env.AUTH_URL || "http://localhost:8002",
  el_Url: process.env.EL_URL || "http://localhost:8003",

  serverPort: process.env.SERVER_PORT || 8080,
};
