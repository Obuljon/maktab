import { Router } from "express";
import HomePage from "../../controllers/homePage/home.controller.js"
const router = new Router();

router.get("/", HomePage.aboutHome )

export default router

