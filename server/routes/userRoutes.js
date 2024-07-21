import { Router } from 'express';
const router = Router();

import { createUser, getUser, updateUser, deleteUser } from '../controllers/userController.js';

router.post('/', createUser);
router.get('/:id', getUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;
