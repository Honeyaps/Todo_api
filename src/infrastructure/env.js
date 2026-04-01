import dotenv from "dotenv";

dotenv.config();

const env = {
  MONGO_URL: process.env.MONGO_URL,
  APPPORT: parseInt(process.env.PORT || ""),
  
};

export default env;