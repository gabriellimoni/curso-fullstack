import { json, Request, Response, Router } from "express";
import { makeCreateCourseController } from "../factories/course/createCourseFactories";
import { makeGetCourseController } from "../factories/course/getCourseFactories";
import { adaptExpressRoute } from "../adapters/expressControllerAdapter";

export const router = Router();
router.use(json());

router.post("/course", adaptExpressRoute(makeCreateCourseController()));
router.get("/course/:id", adaptExpressRoute(makeGetCourseController()));
