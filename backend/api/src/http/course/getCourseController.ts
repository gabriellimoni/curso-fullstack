import { GetCourseRepository } from "@/core/repositories/courseRepository";
import { Controller, HttpRequest, HttpResponse } from "../interfaces";

export class GetCourceController implements Controller {
  constructor(private readonly getCourseRepo: GetCourseRepository) {}

  async handle(req: HttpRequest): Promise<HttpResponse> {
    if (!req.params.id) {
      return {
        status: 400,
        data: {
          message: '"id" is required',
        },
      };
    }

    const createdCourse = await this.getCourseRepo.getById(req.params.id);
    if (!createdCourse) {
      return {
        status: 404,
      };
    }

    return {
      status: 200,
      data: createdCourse,
    };
  }
}
