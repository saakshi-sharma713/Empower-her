import express from "express";
import { addTodo, deleteTodo, getTodo, upDateTodo } from "../Controllers/Todos.controllers.js";
const _router = express.Router();


_router.get("/",getTodo)
_router.post("/add",addTodo)

_router.put("/update/:id",upDateTodo)


_router.delete("/delete/:id",deleteTodo)
const TodoRouter =  _router;
export default TodoRouter;
