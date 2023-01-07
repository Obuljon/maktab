import { Router } from "express";

import SingUp from '../controllers/singup.controller.js';
import SingIn from '../controllers/singin.controller.js';

const router = new Router();

router.get('/singup', SingUp.singupPage);
router.get('/singin', SingIn.singinPage);

router.post('/singup', SingUp.Singup);
router.post('/singin', SingIn.Singin);

export default router;