import { CreateCourseRepository } from "@/core/repositories/courseRepository";
import { CreateCourseDTO, ICourse } from "entities";

const courses: ICourse[] = [];

export class MemoryCourseRepo implements CreateCourseRepository {
  async create(data: CreateCourseDTO): Promise<ICourse> {
    const newCourse: ICourse = {
      ...data,
      id: Date.now().toString(),
    };
    courses.push(newCourse);
    return newCourse;
  }
}
