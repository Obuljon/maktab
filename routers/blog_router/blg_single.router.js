import { Router } from "express";

import BlogSingle from '../../controllers/blog/blog_single/blog.single.controller.js';

const router = new Router();

router.get('/single/:id', BlogSingle.blogsinlePage);

export default router;