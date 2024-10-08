import { dbClient } from "@/shared/lib/db";
import { cache } from "react";
import {
  CourseListElement,
  CreateCourseElementCommand,
  DeleteCourseElementCommand,
} from "./model/types";

class CoursesRepository {
  getCoursesList = cache(
    (): Promise<CourseListElement[]> => dbClient.course.findMany(),
  );

  createCourseElement = (
    command: CreateCourseElementCommand,
  ): Promise<CourseListElement> => {
    return dbClient.course.create({
      data: command,
    });
  };

  deleteCourseElement = (command: DeleteCourseElementCommand) => {
    return dbClient.course.delete({
      where: { id: command.id },
    });
  };
}

export const coursesRepository = new CoursesRepository();
