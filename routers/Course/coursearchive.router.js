import { Router } from "express";
import Course from "../../controllers/course/course.controller.js"

const router = new Router();

router.get('/coursearchive', Course.CoursearchivePage );
router.get("/detail:_id",Course.ourFeatures)

export default router;