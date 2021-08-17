import express from 'express';
import { getUsers,createNewUser,getUser, updateUser } from '../controller/users.js'
import { addPayment, getUserPayments } from '../controller/payments.js'

// User
const router = express.Router();

router.get('/', getUsers );

router.post('/', createNewUser);

router.get('/:id', getUser);

router.patch('/:id', updateUser);

//Payment

router.post('/:id', addPayment);

router.get('/:id/payments', getUserPayments );

export default router;