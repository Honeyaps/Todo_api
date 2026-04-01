import { object, string, number, mixed } from "yup";

export const TodoCreateValidate = object({
  body: object({
    title: string()
      .required("Title is required")
      .trim()
      .min(3, "Title must be at least 3 characters")
      .max(100, "Title must be at most 100 characters"),
    description: string()
      .required("Description is required")
      .trim()
      .max(500, "Description can be max 500 characters"),
    status: string()
      .required("Status is required")
      .oneOf(["pending", "completed"], "Status must be pending or completed"),
  }),
});

export const TodoIdParamsValidate = object({
  params: object({
    id: string()
      .required("ID is required")
      .trim()
      // Use .length(24) if you are using standard MongoDB ObjectIDs
      .length(24, "Invalid ID format: must be 24 characters")
      .min(1, "ID cannot be empty") 
  }),
});