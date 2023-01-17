import { Router } from "express";
import HomePage from "../../controllers/homePage/home.controller.js"
import multer from "multer";


const router = new Router();

router.get("/", HomePage.aboutHome );
router.get("/features:_id", HomePage.ourfeatures);
router.get("/aboutusEdit", HomePage.aboutUsEdit)

router.post("/aboutusEdit", multer({dest:"./public/assets/img/video"}).fields([{name: 'video',maxCount: 1 }, {name:"img", maxCount:2} ]), HomePage.EditAboutUs);

export default router