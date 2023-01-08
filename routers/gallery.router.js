import { Router } from "express";

import Gallery from '../controllers/gallery.controller.js';

const router = new Router();

router.get('/gallery', Gallery.galleryPage);

export default router;