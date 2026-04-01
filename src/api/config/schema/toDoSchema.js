import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    status: { type: String, enum: ["pending", "completed"], default: "pending" },
    insert_date_time: { type: Date, default: Date.now },
  },
  {
    collection: "CrudOpr",
  }
);

const TodoModel = mongoose.model("CrudOpr", todoSchema);

export default TodoModel;