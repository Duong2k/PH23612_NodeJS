import express from 'express';
import axios from 'axios';
import { create, get, getAll, remove, update } from '../controllers/product';
import { checkPermission } from "../middlewares/checkPermission";

const router = express.Router();
router.get("/products", getAll);

router.get("/products/:id", get);


router.post("/products", checkPermission, create);
router.put("/products/:id", checkPermission, update);
router.delete("/products/:id", checkPermission, remove);

export default router;