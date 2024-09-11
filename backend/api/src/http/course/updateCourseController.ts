import { UpdateCourseRepository } from "@/core/repositories/courseRepository";
import { Controller, HttpRequest, HttpResponse } from "../interfaces";

export class UpdateCourceController implements Controller {
  constructor(private readonly updateCourseRepo: UpdateCourseRepository) {}

  async handle(req: HttpRequest): Promise<HttpResponse> {
    if (!req.params.id) {
      return {
        status: 400,
        data: {
          message: '"id" is required',
        },
      };
    }
    if (!req.body.name && !req.body.description) {
      return {
        status: 400,
        data: {
          message: '"name" or "description" are required',
        },
      };
    }

    const updatedCourse = await this.updateCourseRepo.update(
      req.params.id,
      req.body
    );

    return {
      status: 201,
      data: updatedCourse,
    };
  }
}
