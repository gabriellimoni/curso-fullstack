import { CreateCourseDTO, ICourse } from "entities";

export interface CreateCourseRepository {
  create(data: CreateCourseDTO): Promise<ICourse>;
}

export interface GetCourseRepository {
  getById(id: string): Promise<ICourse | null>;
}
