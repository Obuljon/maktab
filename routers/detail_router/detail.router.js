import { Router } from "express";
import Detail from '../../controllers/detail/detail_main.js';
const router = new Router();
router.get('/detail/:id', Detail.detailpageId);
router.get('/detail', Detail.detailPage);

export default router;