import { Router } from "express";
import AddBlogBase from '../../controllers/add_blog/add.blog.js'

const router = new Router();

router.get('/addblog', AddBlogBase.addblogPage);
router.post('/addblog', AddBlogBase.Add);

export default router;
// add blog