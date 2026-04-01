import express from "express";
import { TodoRoute } from "../api/interface/routes/toDo.js";

export const createRouter = () => {
  const router = express.Router();

  // Mount Todo Routes
  TodoRoute(router);

  return router;
};