import express from "express"
import { createUser, fetchUser } from "../controllers/user.controller.js";
const _route = express.Router();

_route.post("/signup",createUser)
_route.get("/myprofile",fetchUser)
const userRouter = _route;
export default userRouter;