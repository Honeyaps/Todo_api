import cors from "cors";
import express from "express";

const app = express();

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

app.get("/", (req, res) => {
  res.send("API working successfully 🚀");
});

app.use("/v2", (req, res) => {
  res.status(404).send("Not Found");
});

export default app;