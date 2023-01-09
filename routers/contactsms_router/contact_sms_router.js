import { Router } from "express";
import ContactSms from '../../controllers/contact_sms/contact.sms.js';

const router = new Router();

router.get('/contactsms', ContactSms.contactsmsPage);

export default router;