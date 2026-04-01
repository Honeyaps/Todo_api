import mongoose from "mongoose";

export const dbconnection = async () => {
 const MONGO_URL =
"mongodb://honeyaps12345_db_user:Honey2100@ac-8kb6asg-shard-00-00.cqubytl.mongodb.net:27017,ac-8kb6asg-shard-00-01.cqubytl.mongodb.net:27017,ac-8kb6asg-shard-00-02.cqubytl.mongodb.net:27017/?ssl=true&replicaSet=atlas-7755o7-shard-0&authSource=admin&retryWrites=true&w=majority";


  try {
    await mongoose.connect(MONGO_URL);

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