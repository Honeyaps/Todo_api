import express from "express";
import { TodoRoute } from "../api/interface/routes/toDo.js";

export const createRouter = () => {
  const router = express.Router();
  TodoRoute(router);

  return router;
};