// routes/passwordRoutes.js
import express from 'express';
import { createPassword, getPasswordById, updatePassword, deletePassword } from '../controllers/passwordController.js';

const router = express.Router();

// Define routes for password operations
router.post('/', createPassword);
router.get('/:id', getPasswordById);
router.put('/:id', updatePassword);
router.delete('/:id', deletePassword);

export default router;
