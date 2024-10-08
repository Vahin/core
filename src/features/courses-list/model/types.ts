export type CourseListElement = {
  id: string;
  name: string;
  description: string;
};

export type CreateCourseElementCommand = {
  name: string;
  description: string;
};

export type DeleteCourseElementCommand = {
  id: string;
};
