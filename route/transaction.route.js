import { Router } from "express";
import { deletetransaction, transaction, transactions } from "../controller/transaction.controller.js";
const router=Router();

router.post('/transaction',transaction);
router.get('/transactions',transactions);
router.delete('/:id',deletetransaction);

 

export default router;