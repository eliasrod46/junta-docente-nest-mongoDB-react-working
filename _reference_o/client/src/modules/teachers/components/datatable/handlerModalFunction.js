//---open modal to edit
export const editTeacher = (
  teacher,
  setTeacher,
  setToEdit,
  setTeacherDialog
) => {
  // save teacher in template
  setTeacher({ ...teacher });
  setToEdit(true);
  // open modal
  setTeacherDialog(true);
};

//---open modal to delete
export const confirmDeleteTeacher = (
  teacher,
  setTeacher,
  setDeleteTeacherDialog
) => {
  setTeacher(teacher);
  setDeleteTeacherDialog(true);
};

//---open modal to create
export const openNew = (setTeacher, setTeacherDialog, emptyTeacher) => {
  // save teacher empty
  setTeacher(emptyTeacher);
  // set submitted in false
  // setSubmitted(false);
  // open modal
  setTeacherDialog(true);
};

//====>reset modal Handler
// close modal delete
export const hideDeleteTeacherDialog = (setDeleteTeacherDialog) => {
  setDeleteTeacherDialog(false);
};

// close modal create | edit
export const hideDialog = (setTeacherDialog) => {
  setTeacherDialog(false);
};
