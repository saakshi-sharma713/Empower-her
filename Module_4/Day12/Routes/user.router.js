import express from "express"
import { createUser, deleteUser, getUser, getUsers, updateUser } from "../Controllers/user.controller.js"
const router = express.Router();
router.post("/add-user",createUser);
router.get("/",getUsers);
router.get("/:id",getUser);
router.put("/update-user/:id",updateUser);
router.delete("/delete-user/:id",deleteUser)
export const userRouter = router