import { CreateCourceController } from "@/http/course/createCourseController";
import { Controller } from "@/http/interfaces";
import { MemoryCourseRepo } from "@/infra/memory/memoryCourseRepository";

export const makeCreateCourseController = (): Controller => {
  return new CreateCourceController(new MemoryCourseRepo());
};
