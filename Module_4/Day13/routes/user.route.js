import express from "express"
import { createUser } from "../controllers/user.controller.js";
const _route = express.Router();
_route.post("/signUp",createUser);


 const userRouter = _route;
 export default userRouter;