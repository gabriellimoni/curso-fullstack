import { CreateCourseDTO, ICourse } from "entities";

export interface CreateCourseRepository {
  create(data: CreateCourseDTO): Promise<ICourse>;
}
