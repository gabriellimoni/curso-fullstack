import { ICourse } from "@/entites/course";

export type CreateCourseDTO = Pick<ICourse, "name" | "description">;
