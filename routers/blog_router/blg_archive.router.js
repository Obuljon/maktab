import { Router } from "express";
import BlgArchive from '../../controllers/blog/blog_archive/blog.archive.controller.js';
const router = new Router(); 

router.get('/blogarchive', BlgArchive.BblogarchivePage);


export default router;
// dsds