import express from 'express'
import { createUser } from '../Controllers/customer.controller.js';
const router = express.Router();

router.post("/",createUser);

const customerRouter = router;
export default customerRouter;