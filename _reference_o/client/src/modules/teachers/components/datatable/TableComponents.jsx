// input chande handler
import { InputText } from "primereact/inputtext";
import {
  saveTeacherHandler,
  deleteTeacherFuction,
} from "./handlerLogicFunction.js";
import { hideDialog, hideDeleteTeacherDialog } from "./handlerModalFunction.js";
import {
  DangerButton,
  SuccessButton,
  InfoButton,
} from "../../../../components/Buttons";

//---Header Table
export const header = (setGlobalFilter) => {
  return (
    <div className="flex flex-col align-items-center p-2 text-right">
      <h4 className="text-md">Buscar Docente:</h4>
      <span>
        <InputText
          className="text-md p-1 rounded-lg"
          type="search"
          onInput={(e) => setGlobalFilter(e.target.value)}
          placeholder="Buscar..."
        />
      </span>
    </div>
  );
};

//====================>footer Modals

//-- add/update Element
export const teacherDialogFooter = (
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
  return (
    <>
      <DangerButton clickHandler={() => hideDialog(setTeacherDialog)}>
        Cancelar
      </DangerButton>
      <SuccessButton
        clickHandler={() =>
          saveTeacherHandler(
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
          )
        }
      >
        Guardar
      </SuccessButton>
    </>
  );
};

//-- delete Element
export const deleteTeacherDialogFooter = (
  teacher,
  deleteTeacher,
  getAllTeachers,
  setTeacher,
  setDeleteTeacherDialog,
  emptyTeacher,
  toast
) => {
  // buttons to delete
  return (
    <div className="pt-5">
      <InfoButton
        clickHandler={() => hideDeleteTeacherDialog(setDeleteTeacherDialog)}
      >
        No
      </InfoButton>
      <DangerButton
        clickHandler={() =>
          deleteTeacherFuction(
            teacher,
            deleteTeacher,
            getAllTeachers,
            setTeacher,
            setDeleteTeacherDialog,
            emptyTeacher,
            toast
          )
        }
      >
        Si
      </DangerButton>
    </div>
  );
};
