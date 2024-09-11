import {
  CreateCourseRepository,
  GetCourseRepository,
} from "@/core/repositories/courseRepository";
import { CreateCourseDTO, ICourse } from "entities";

const courses: ICourse[] = [];

export class MemoryCourseRepo
  implements CreateCourseRepository, GetCourseRepository
{
  async create(data: CreateCourseDTO): Promise<ICourse> {
    const newCourse: ICourse = {
      ...data,
      id: Date.now().toString(),
    };
    courses.push(newCourse);
    return newCourse;
  }
  async getById(id: string): Promise<ICourse | null> {
    const found = courses.find((c) => c.id === id);
    if (!found) return null;
    return found;
  }
}
