import express from 'express'
import { createOrder, getOrder} from '../Controllers/customer.controller.js';
const router = express.Router();

router.post("/add-order",createOrder);
router.get("/get-my-orders/:customerId",getOrder)
const orderRouter = router;
export default orderRouter;