import cors from "cors";
import express from "express";
import { dbconnection } from "./src/api/config/db.js";
import { createRouter } from "./src/infrastructure/routes.js";

const app = express();
const port = 4000;

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

dbconnection();

app.get("/", (req, res) => {
  res.send("API working successfully 🚀");
});

app.use("/v2", createRouter());

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
