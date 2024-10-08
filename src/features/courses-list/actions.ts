"use server";

import { revalidatePath } from "next/cache";
import { CreateCourseElementCommand } from "./model/types";
import { coursesRepository } from "./courses-repository";

export const createCourseAction = async (
  revalidatePagePath: string,
  command: CreateCourseElementCommand,
) => {
  await coursesRepository.createCourseElement(command);
  revalidatePath(revalidatePagePath);
};
