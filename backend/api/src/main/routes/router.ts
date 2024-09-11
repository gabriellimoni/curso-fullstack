import { json, Request, Response, Router } from "express";
import { makeCreateCourseController } from "../factories/course/createCourseFactories";
import { makeGetCourseController } from "../factories/course/getCourseFactories";

export const router = Router();
router.use(json());

router.post("/course", async (req: Request, res: Response) => {
  const controller = makeCreateCourseController();
  const result = await controller.handle({
    body: req.body,
  });
  res.status(result.status).send(result.data);
});

router.get("/course/:id", async (req: Request, res: Response) => {
  const controller = makeGetCourseController();
  const result = await controller.handle({
    params: {
      id: req.params.id,
    },
  });
  res.status(result.status).send(result.data);
});
