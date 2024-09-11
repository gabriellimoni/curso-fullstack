import { CreateCourseRepository } from "@/core/repositories/courseRepository";
import { Controller, HttpRequest, HttpResponse } from "../interfaces";

export class CreateCourceController implements Controller {
  constructor(private readonly createCourseRepo: CreateCourseRepository) {}

  async handle(req: HttpRequest): Promise<HttpResponse> {
    if (!req.body.name) {
      return {
        status: 400,
        data: {
          message: '"name" is required',
        },
      };
    }
    if (!req.body.description) {
      return {
        status: 400,
        data: {
          message: '"description" is required',
        },
      };
    }

    const createdCourse = await this.createCourseRepo.create(req.body);

    return {
      status: 201,
      data: createdCourse,
    };
  }
}
