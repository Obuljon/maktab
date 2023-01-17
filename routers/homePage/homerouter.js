import { Router } from "express";
import HomePage from "../../controllers/homePage/home.controller.js"
const router = new Router();

router.get("/", HomePage.aboutHome );
router.get("/features:_id", HomePage.ourfeatures);
router.get("/aboutusEdit", HomePage.aboutUsEdit)

router.post("/aboutusEdit", HomePage.aboutUsEdit);

export default router

