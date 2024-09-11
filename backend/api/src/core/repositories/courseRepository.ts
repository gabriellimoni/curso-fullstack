import { CreateCourseDTO, ICourse, UpdateCourseDTO } from "entities";

export interface CreateCourseRepository {
  create(data: CreateCourseDTO): Promise<ICourse>;
}

export interface UpdateCourseRepository {
  update(id: string, data: UpdateCourseDTO): Promise<ICourse | null>;
}

export interface GetCourseRepository {
  getById(id: string): Promise<ICourse | null>;
}
