import { Router } from "express";
import Course from "../../controllers/course/couurse.controller";
import IsAuth from '../controllers/isasuth.controller.js';

const router = new Router();

Router.get('/coursearchive', IsAuth, Course.CoursearchivePage);

export default router;