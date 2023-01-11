import { Router } from "express";
import Detail from '../../controllers/detail/detail_main.js';
const router = new Router();
// ____ ?
router.get('/detail/:id', Detail.detailpageId);

export default router;