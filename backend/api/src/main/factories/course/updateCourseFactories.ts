import { UpdateCourceController } from "@/http/course/updateCourseController";
import { Controller } from "@/http/interfaces";
import { MemoryCourseRepo } from "@/infra/memory/memoryCourseRepository";

export const makeUpdateCourseController = (): Controller => {
  return new UpdateCourceController(new MemoryCourseRepo());
};
