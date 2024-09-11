import { json, Request, Response, Router } from "express";
import { makeCreateCourseController } from "../factories/course/createCourseFactories";

export const router = Router();
router.use(json());

router.post("/course", async (req: Request, res: Response) => {
  const controller = makeCreateCourseController();
  const result = await controller.handle({
    body: req.body,
  });
  res.status(result.status).send(result.data);
});
