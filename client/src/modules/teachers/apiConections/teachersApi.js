const URI = "http://localhost:8080/api";

export const getAllTeachersApi = async () => {
  const teachers = await fetch(`${URI}/teachers`);
  const teachersJson = teachers.json();
  return teachersJson;
};
