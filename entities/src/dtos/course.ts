import { ICourse } from "@/entites/course";

export type CreateCourseDTO = Pick<ICourse, "name" | "description">;
export type UpdateCourseDTO = Partial<Pick<ICourse, "name" | "description">>;
