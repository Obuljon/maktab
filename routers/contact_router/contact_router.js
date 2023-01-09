import { Router } from "express";
import Contact from '../../controllers/contact/contact.controller.js';

const router = new Router();

router.get('/contact', Contact.conactPage);
router.post('/contact', Contact.Contact);

export default router;