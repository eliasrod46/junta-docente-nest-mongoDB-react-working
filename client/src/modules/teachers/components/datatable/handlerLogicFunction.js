//====>logic funcions
// create | edit
export const saveTeacherHandler = async (
  teacher,
  toEdit,
  setToEdit,
  saveTeacher,
  setErrors,
  getAllTeachers,
  setTeacherDialog,
  setTeacher,
  emptyTeacher,
  updateTeacher,
  toast
) => {
  if (!toEdit) {
    // logic to save teacher
    const response = await saveTeacher(teacher);
    response.errors ? setErrors(response.errors) : "";
    //restart config
    if (!response.errors) {
      getAllTeachers();
      setTeacherDialog(false);
      setTeacher(emptyTeacher);
      // beatuty message
      toast.current.show({
        severity: "success",
        summary: "Successful",
        detail: "Teacher added ",
        life: 3000,
      });
    }
  } else {
    // logic to update teacher
    const response = await updateTeacher(teacher.id, teacher);
    response.errors ? setErrors(response.errors) : "";
    //restart config
    if (!response.errors) {
      getAllTeachers();
      setTeacherDialog(false);
      setTeacher(emptyTeacher);
      // beatuty message
      toast.current.show({
        severity: "success",
        summary: "Successful",
        detail: "Teacher updated ",
        life: 3000,
      });
    }
    setToEdit(false);
  }
};

// delete
export const deleteTeacherFuction = (
  teacher,
  deleteTeacher,
  getAllTeachers,
  setTeacher,
  setDeleteTeacherDialog,
  emptyTeacher,
  toast
) => {
  //logic delete
  deleteTeacher(teacher.id);
  //restart config
  //---/ToDo make list update after delete, maybe refresh
  getAllTeachers();
  setDeleteTeacherDialog(false);
  setTeacher(emptyTeacher);

  // beatuty message
  toast.current.show({
    severity: "success",
    summary: "Successful",
    detail: "Product Deleted",
    life: 3000,
  });
};

//inputChange HAndler
export const onInputChange = (e, name, teacher, setTeacher) => {
  const val = (e.target && e.target.value) || "";
  let _teacher = { ...teacher };
  _teacher[`${name}`] = val;
  setTeacher(_teacher);
};
