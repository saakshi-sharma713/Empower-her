import express from "express"
import { addTodo, deleteTodo, fetchUserTodo, updateTodo } from "../controllers/todo.controller.js";

const _route = express.Router();
_route.post("/add-todo",addTodo);
_route.get("/get-my-todo/:userId",fetchUserTodo);
_route.put("/update-todo/:todoId",updateTodo);
_route.delete("/delete-todo/:todoId",deleteTodo)
 const todoRouter = _route;
 export default todoRouter;