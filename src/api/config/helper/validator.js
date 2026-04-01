import { object, string } from "yup";

export const TodoCreateValidate = object({
  body: object({
    title: string()
      .required("Title is required")
      .min(3, "Title must be at least 3 characters")
      .max(100, "Title must be at most 100 characters"),
    description: string()
      .max(500, "Description can be max 500 characters"),
    status: string()
      .oneOf(["pending", "completed"], "Status must be pending or completed"),
  }),
});