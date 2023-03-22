import express from 'express';
import axios from 'axios';
import { create, get, getAll, remove, update } from '../controllers/product';

const router = express.Router();
router.get("/products", getAll);

router.get("/products/:id", get);


router.post("/products", create);
router.put("/products:id", update);
router.delete("/products/:id", remove);

export default router;