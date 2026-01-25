import express from 'express'
import { createOrder, deleteOrder, getOrder} from '../Controllers/customer.controller.js';
const router = express.Router();

router.post("/add-order",createOrder);
router.get("/get-my-orders/:customerId",getOrder)
router.delete("/delete-order/:customerId",deleteOrder)
const orderRouter = router;
export default orderRouter;