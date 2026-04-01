
// import { validateRequest } from "../../config/helper/validateRequest";
import { TodoCreate, TodoDelete, TodoGetAll, TodoGetById, TodoUpdate } from "../controller/toDo_controller.js";
// import { TodoCreateValidate } from "../../config/helper/validator.js";


export const TodoRoute = (router) => {
  router.post("/todoCreate", TodoCreate);
  router.get("/todos", TodoGetAll);
  router.get("/todos/:id", TodoGetById);
  router.put("/todos/:id", TodoUpdate);
  router.delete("/todos/:id", TodoDelete);
};