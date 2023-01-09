import { Router } from "express";
import Delete from '../../controllers/delete/delete.controller.js';

const router = new Router();

router.get('/delete/:id', Delete.deletePage);

export default router;