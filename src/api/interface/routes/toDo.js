
// import { validateRequest } from "../../config/helper/validateRequest";
import { TodoCreate, TodoDelete, TodoGetAll, TodoGetById, TodoUpdate } from "../controller/toDo_controller.js";
// import { TodoCreateValidate } from "../../config/helper/validator.js";


export const TodoRoute = (router) => {
  router.post("/todoCreate", TodoCreate);
  router.get("/todosGetAll", TodoGetAll);
  router.get("/todosGet/:id", TodoGetById);
  router.put("/todosUpdate/:id", TodoUpdate);
  router.delete("/todosDelete/:id", TodoDelete);
};