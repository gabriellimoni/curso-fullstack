import {
  CreateCourseRepository,
  GetCourseRepository,
  UpdateCourseRepository,
} from "@/core/repositories/courseRepository";
import { CreateCourseDTO, ICourse } from "entities";

const courses: ICourse[] = [];

export class MemoryCourseRepo
  implements
    CreateCourseRepository,
    GetCourseRepository,
    UpdateCourseRepository
{
  async create(data: CreateCourseDTO): Promise<ICourse> {
    const newCourse: ICourse = {
      ...data,
      id: Date.now().toString(),
    };
    courses.push(newCourse);
    return newCourse;
  }
  async update(id: string, data: CreateCourseDTO): Promise<ICourse | null> {
    const found = await this.getById(id);
    if (!found) return null;
    const idx = courses.indexOf(found);
    const updatedCourse: ICourse = {
      ...found,
      ...data,
    };
    courses.splice(idx, 1, updatedCourse);
    return updatedCourse;
  }
  async getById(id: string): Promise<ICourse | null> {
    const found = courses.find((c) => c.id === id);
    if (!found) return null;
    return found;
  }
}
