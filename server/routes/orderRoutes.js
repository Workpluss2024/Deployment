import { Router } from 'express';
import { createOrder, getOrder, updateOrder, deleteOrder } from '../controllers/orderController.js';

const router = Router();

// Route to create a new order
router.post('/', createOrder);

// Route to retrieve an order by ID
router.get('/:id', getOrder);

// Route to update an order by ID
router.put('/:id', updateOrder);

// Route to delete an order by ID
router.delete('/:id', deleteOrder);

export default router;