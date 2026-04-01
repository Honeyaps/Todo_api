import cors from "cors";
import express from "express";
// import { dbconnection } from "./src/api/config/db.js";
// import { createRouter } from "./src/infrastructure/route.js";
// import env from "./src/infrastructure/env.js";


const app = express();
const port = 4000

app.use(
  cors({
    origin: "*",
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    credentials: true,
    allowedHeaders: "Content-Type, Authorization",
  })
);

app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// dbconnection();

app.get('/', (req, res) => {
  console.log('Example endpoint hit');
  res.send('This is an example endpoint!');
});

// app.use("/v2", createRouter());

app.use("/v2", (req, res) => {
  res.status(404).send("Not Found");
});

app.listen(port, () => {
  console.log(`APP listening on port:${port}`); 
});
