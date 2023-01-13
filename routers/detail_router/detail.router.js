import { Router } from "express";
import Detail from '../../controllers/detail/detail_main.js';
const router = new Router();
<<<<<<< HEAD
router.get('/detail/:id', Detail.detailpageId);
=======
// ____ ?
router.get('/detail', Detail.detailpageId);
>>>>>>> c34544342b9ab8ae1c01f49726a16ab0d3098251

export default router;