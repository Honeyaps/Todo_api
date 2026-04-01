import mongoose from "mongoose";
import env from "../../infrastructure/env.js";

export const dbconnection = async () => {
  if (mongoose.connection.readyState >= 1) return;

  try {
    await mongoose.connect(env.MONGO_URL);

    console.log("MongoDB Connected Successfully 🚀");

    mongoose.set("debug", (collectionName, method, query, doc) => {
      console.log(
        `${collectionName}.${method}`,
        JSON.stringify(query),
        doc || ""
      );
    });

  } catch (error) {
    console.error("MongoDB Connection Error:", error.message);
  }
};