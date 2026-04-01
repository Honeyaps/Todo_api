import { validateRequest } from "../../config/helpers/validateRequest.js";

import { TodoCreate, TodoDelete, TodoGetAll, TodoGetById, TodoUpdate } from "../controller/toDo_controller.js";


import { TodoCreateValidate, TodoIdParamsValidate } from "../../config/helpers/validator.js";

export const TodoRoute = (router) => {
  router.post("/todoCreate", TodoCreate);
  router.get("/todosGetAll", TodoGetAll);
  router.get("/todosGet/:id?", validateRequest(TodoIdParamsValidate), TodoGetById);
  router.put("/todosUpdate/:id?",validateRequest(TodoCreateValidate) ,TodoUpdate);
  router.delete("/todosDelete/:id?" ,validateRequest(TodoIdParamsValidate), TodoDelete);
};