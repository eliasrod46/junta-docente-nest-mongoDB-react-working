import React, { useState, useEffect, useRef } from "react";

//====================>datatable
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import { Dialog } from "primereact/dialog";

//====================>hooks
import { useTeachers } from "../../hooks/useTeachers";

//====================>buttons
import {
  DangerButton,
  PurpleButton,
  InfoButton,
} from "../../../../components/Buttons";

//====================>icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrash,
  faAdd,
  faFileExport,
} from "@fortawesome/free-solid-svg-icons";

//====================>datatable components/functions imports
import {
  editTeacher,
  confirmDeleteTeacher,
  openNew,
  hideDeleteTeacherDialog,
  hideDialog,
} from "./handlerModalFunction.js";
import { onInputChange } from "./handlerLogicFunction.js";

import {
  header,
  teacherDialogFooter,
  deleteTeacherDialogFooter,
} from "./TableComponents.jsx";

import { ShowErrors, LabelModal, InputModal } from "./TableModals.jsx";

export function TeachersTable() {
  //====================>vars
  let emptyTeacher = {
    dni: "",
    lastname: "",
    name: "",
  };

  //====================>states
  const [errors, setErrors] = useState([]);
  const [globalFilter, setGlobalFilter] = useState(null);
  const [teacher, setTeacher] = useState(emptyTeacher);
  const [rows, setRows] = useState([]);
  const [teacherDialog, setTeacherDialog] = useState(false);
  const [deleteTeacherDialog, setDeleteTeacherDialog] = useState(false);
  const [toEdit, setToEdit] = useState(false);

  //====================>hooks
  const {
    teachers,
    getAllTeachers,
    saveTeacher,
    deleteTeacher,
    updateTeacher,
  } = useTeachers();

  //====================>refs
  const toast = useRef(null);
  const dt = useRef(null);

  //====>call all teachers<====
  useEffect(() => {
    getAllTeachers();
  }, []);

  useEffect(() => {
    setRows(teachers);
  }, [teachers]);

  //====================>General Functions

  //====================>buttons in table
  const actionBodyTemplate = (rowData) => {
    return (
      <>
        <InfoButton
          clickHandler={() =>
            editTeacher(rowData, setTeacher, setToEdit, setTeacherDialog)
          }
        >
          <FontAwesomeIcon icon={faEdit} />
        </InfoButton>
        <DangerButton
          clickHandler={() =>
            confirmDeleteTeacher(rowData, setTeacher, setDeleteTeacherDialog)
          }
        >
          <FontAwesomeIcon icon={faTrash} />
        </DangerButton>
      </>
    );
  };

  // export
  const exportCSV = () => {
    dt.current.exportCSV();
  };

  //====>Return<====
  return (
    <div>
      <Toast ref={toast} />
      {/* teacher detail modal manejable */}
      <div>
        <div className="bg-gray-300 bg-opacity-90 rounded-xl border shadow-inner flex items-center justify-evenly w-1/6 p-5 py-2 mx-auto">
          <InfoButton
            clickHandler={() =>
              openNew(setTeacher, setTeacherDialog, emptyTeacher)
            }
          >
            <FontAwesomeIcon icon={faAdd} />
          </InfoButton>
          <PurpleButton clickHandler={exportCSV}>
            <FontAwesomeIcon icon={faFileExport} />
          </PurpleButton>
        </div>

        {/* Table */}
        <DataTable
          ref={dt}
          value={rows}
          dataKey="id"
          className="bg-gray-300 bg-opacity-80 w-10/12 mx-auto rounded-lg p-10 "
          paginator
          rows={10}
          rowsPerPageOptions={[5, 10, 15]}
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
          globalFilter={globalFilter}
          header={header(setGlobalFilter)}
        >
          {/* dni */}
          <Column
            field="dni"
            header="DNI"
            className="w-2/12 text-center p-1 border border-x-0 border-black"
            sortable
          ></Column>
          {/* lastname listo */}
          <Column
            className="w-2/12 text-center p-1 border border-x-0 border-black"
            field="lastname"
            header="Apellido"
            sortable
          ></Column>
          {/* name listo */}
          <Column
            field="name"
            header="Nombre"
            className="w-3/12 text-center p-1 border border-x-0 border-black"
            sortable
          ></Column>
          {/* actionBodyTemplate */}
          <Column
            header="Acciones"
            body={actionBodyTemplate}
            className="w-2/12 text-center p-1 border border-x-0 border-black"
            exportable={false}
          ></Column>
        </DataTable>
      </div>

      {/* create teacher modal */}
      <Dialog
        className="bg-gray-300 bg-opacity-90 p-5 text-center rounded-xl border shadow-inner"
        visible={teacherDialog}
        style={{ width: "32rem" }}
        breakpoints={{ "960px": "75vw", "641px": "90vw" }}
        modal
        footer={teacherDialogFooter(
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
        )}
        onHide={() => hideDialog(setTeacherDialog)}
      >
        <h2>Detalles Docente</h2>
        {/* dni */}
        <div className="my-5">
          <LabelModal id="dni" label="DNI" />
          <InputModal id="dni" teacher={teacher} setTeacher={setTeacher} />
          <ShowErrors id="dni" errors={errors} />
        </div>
        {/* lastname */}
        <div className="my-5">
          <LabelModal id="lastname" label="Apellido" />
          <InputModal id="lastname" teacher={teacher} setTeacher={setTeacher} />
          <ShowErrors id="lastname" errors={errors} />
        </div>
        {/* name */}
        <div className="my-5">
          <LabelModal id="name" label="Nombre" />
          <InputModal id="name" teacher={teacher} setTeacher={setTeacher} />
          <ShowErrors id="name" errors={errors} />
        </div>
      </Dialog>

      {/* delete teacher modal */}
      <Dialog
        className="bg-gray-300 bg-opacity-90 p-5 text-center rounded-xl border shadow-inner"
        visible={deleteTeacherDialog}
        style={{ width: "32rem" }}
        breakpoints={{ "960px": "75vw", "641px": "90vw" }}
        header="Confirm"
        modal
        footer={deleteTeacherDialogFooter(
          teacher,
          deleteTeacher,
          getAllTeachers,
          setTeacher,
          setDeleteTeacherDialog,
          emptyTeacher,
          toast
        )}
        onHide={() => hideDeleteTeacherDialog(setDeleteTeacherDialog)}
      >
        <div>
          {teacher && (
            <span>
              Estas seguro de eliminar al docente <b>{teacher.name}</b>?
            </span>
          )}
        </div>
      </Dialog>
    </div>
  );
}
