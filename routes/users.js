import express from 'express';
import { getUsers,createNewUser,getUser } from '../controller/users.js'
import { addPayment } from '../controller/payments.js'

const router = express.Router();

router.get('/', getUsers );

router.post('/', createNewUser);

router.get('/:id', getUser);

router.post('/:id', addPayment);

export default router;