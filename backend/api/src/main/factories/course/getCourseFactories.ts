import { GetCourceController } from "@/http/course/getCourseController";
import { Controller } from "@/http/interfaces";
import { MemoryCourseRepo } from "@/infra/memory/memoryCourseRepository";

export const makeGetCourseController = (): Controller => {
  return new GetCourceController(new MemoryCourseRepo());
};
