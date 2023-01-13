import { Router } from "express";
import Detail from '../../controllers/detail/detail_main.js';
const router = new Router();
// ____ ?
router.get('/detail', Detail.detailpageId);

export default router;