import React, { useState, useEffect, useRef } from "react";
import { useShifts } from "../hooks/useShifts";

//====================>buttons
import {
  InfoButton,
  DangerButton,
  SuccessButton,
  PurpleButton,
  SecondaryButton,
} from "./Buttons";

//====================>datatable
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Toolbar } from "primereact/toolbar";

export function ShiftsTable() {
  //====================>vars
  let emptyShift = {
    type: "",
    date: "",
    time: "",
    year: "",
  };

  //====================>states
  const [errors, setErrors] = useState([]);
  const [globalFilter, setGlobalFilter] = useState(null);
  const [shift, setShift] = useState(emptyShift);
  const [rows, setRows] = useState([]);

  const [shiftDialog, setShiftDialog] = useState(false);
  const [deleteShiftDialog, setDeleteShiftDialog] = useState(false);
  const [toEdit, setToEdit] = useState(false);

  //====================>hooks
  const { shifts, getAllShifts, saveShift } = useShifts();

  //====================>refs
  const toast = useRef(null);
  const dt = useRef(null);

  //====>call all teachers<====
  useEffect(() => {
    getAllShifts();
  }, []);

  useEffect(() => {
    setRows(shifts);
  }, [shifts]);

  //====================>functions

  //====>create | edit | delete  teachers<====
  //====>hander funcions
  // create
  const openNew = () => {
    // save teacher empty
    setShift(emptyShift);
    // set submitted in false
    // setSubmitted(false);
    // open modal
    setShiftDialog(true);
  };

  // edit
  const editTeacher = (teacher) => {
    // save teacher in template
    setTeacher({ ...teacher });
    setToEdit(true);
    // open modal
    setTeacherDialog(true);
  };

  // delete
  const confirmDeleteTeacher = (teacher) => {
    setTeacher(teacher);
    setDeleteTeacherDialog(true);
  };

  //====>logic funcions
  // create | edit
  const saveTeacherHandler = async () => {
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
  const deleteTeacherFuction = () => {
    //logic to save || update teacher
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

  //====>reset modal funcions
  // create | edit
  const hideDialog = () => {
    // setSubmitted(false);
    setTeacherDialog(false);
  };

  // delete
  const hideDeleteTeacherDialog = () => {
    setDeleteTeacherDialog(false);
  };

  //====>footer Modals
  // create | edit  painted
  const teacherDialogFooter = (
    // buttons to save
    <>
      <DangerButton clickHandler={hideDialog}>Cancelar</DangerButton>
      <SuccessButton clickHandler={saveTeacherHandler}>Guardar</SuccessButton>
    </>
  );

  // delete   painted
  const deleteTeacherDialogFooter = (
    // buttons to delete

    <div className="pt-5">
      <InfoButton clickHandler={hideDeleteTeacherDialog}>No</InfoButton>
      <DangerButton clickHandler={deleteTeacherFuction}>Si</DangerButton>
    </div>
  );

  //====>General Functions<====

  // input chande handler
  const onInputChange = (e, name) => {
    const val = (e.target && e.target.value) || "";
    let _teacher = { ...teacher };
    _teacher[`${name}`] = val;
    setTeacher(_teacher);
  };

  // gloabal search ok styled
  const header = (
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

  //====>table Functions<====

  // acctions buttons rows painted
  const actionBodyTemplate = (rowData) => {
    return (
      <>
        <InfoButton clickHandler={() => editTeacher(rowData)}>
          Editar
        </InfoButton>
        <DangerButton clickHandler={() => confirmDeleteTeacher(rowData)}>
          Eliminar
        </DangerButton>
      </>
    );
  };

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
          <InfoButton clickHandler={openNew}>New</InfoButton>
          <PurpleButton clickHandler={exportCSV}>Exportar</PurpleButton>
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
          header={header}
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
            header="Operaciones"
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
        footer={teacherDialogFooter}
        onHide={hideDialog}
      >
        <h2>Detalles Docente</h2>
        {/* dni */}
        <div className="my-5">
          <label htmlFor="dni" className="font-bold block">
            DNI
          </label>
          <InputText
            id="dni"
            className="text-md p-1 rounded-lg"
            type="number"
            value={teacher.dni}
            onChange={(e) => onInputChange(e, "dni")}
            required
            autoFocus
          />
          <ul>
            {errors.map((error, i) => {
              return (
                error.path === "dni" && (
                  <li key={i}>
                    <small className="p-error">{error.msg}</small>
                  </li>
                )
              );
            })}
          </ul>
        </div>

        {/* lastname */}
        <div className="my-5">
          <label htmlFor="lastname" className="font-bold block">
            Apellido
          </label>
          <InputText
            className="text-md p-1 rounded-lg"
            id="lastname"
            value={teacher.lastname}
            onChange={(e) => onInputChange(e, "lastname")}
            required
            autoFocus
          />
          <ul>
            {errors.map((error, i) => {
              return (
                error.path === "lastname" && (
                  <li key={i}>
                    <small className="p-error">{error.msg}</small>
                  </li>
                )
              );
            })}
          </ul>
        </div>

        {/* name */}
        <div className="my-5">
          <label htmlFor="name" className="font-bold block">
            Nombre
          </label>
          <InputText
            id="name"
            value={teacher.name}
            onChange={(e) => onInputChange(e, "name")}
            required
            autoFocus
            className="text-md p-1 rounded-lg"
          />
          <ul>
            {errors.map((error, i) => {
              return (
                error.path === "name" && (
                  <li key={i}>
                    <small className="p-error">{error.msg}</small>
                  </li>
                )
              );
            })}
          </ul>
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
        footer={deleteTeacherDialogFooter}
        onHide={hideDeleteTeacherDialog}
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
