import React, { useState, useEffect, useRef } from "react";
import { useTeachers } from "../hooks/useTeachers";

//====================>buttons
import { InfoButton } from "./Buttons";

//====================>datatable
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { classNames } from "primereact/utils";
import { Toolbar } from "primereact/toolbar";

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

  //====================>functions

  //====>create | edit | delete  teachers<====
  //====>hander funcions
  // create
  const openNew = () => {
    // save teacher empty
    setTeacher(emptyTeacher);
    // set submitted in false
    // setSubmitted(false);
    // open modal
    setTeacherDialog(true);
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
      <Button
        className="bg-red-800"
        label="Cancel"
        icon="pi pi-times"
        outlined
        onClick={hideDialog}
      />
      <Button
        className="bg-sky-800"
        label="Save"
        icon="pi pi-check"
        onClick={saveTeacherHandler}
      />
    </>
  );

  // delete   painted
  const deleteTeacherDialogFooter = (
    // buttons to delete

    <>
      <Button
        label="No"
        className="bg-sky-800"
        icon="pi pi-times"
        outlined
        onClick={hideDeleteTeacherDialog}
      />
      <Button
        className="bg-red-800"
        label="Yes"
        icon="pi pi-check"
        severity="danger"
        onClick={deleteTeacherFuction}
      />
    </>
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

  // button add teacher painted ready
  const leftToolbarTemplate = () => {
    return <InfoButton clickHandler={openNew}>New</InfoButton>;
  };

  // acctions buttons rows painted
  const actionBodyTemplate = (rowData) => {
    return (
      <>
        <Button
          icon="pi pi-pencil"
          rounded
          outlined
          className="fa fa-home bg-green-500"
          onClick={() => editTeacher(rowData)}
        >
          edit
        </Button>

        <Button
          icon="pi pi-trash"
          rounded
          className="fa fa-home bg-red-500"
          outlined
          severity="danger"
          onClick={() => confirmDeleteTeacher(rowData)}
        >
          delete
        </Button>
      </>
    );
  };

  //====>unused<====

  const exportCSV = () => {
    dt.current.exportCSV();
  };

  // button export data painted
  const rightToolbarTemplate = () => {
    return (
      <Button
        label="Export"
        icon="pi pi-upload"
        className="bg-blue-500"
        onClick={exportCSV}
      />
    );
  };

  //====>Return<====
  return (
    <div>
      <Toast ref={toast} />
      {/* teacher detail modal manejable */}
      <div className="card">
        <Toolbar
          left={leftToolbarTemplate}
          right={rightToolbarTemplate}
        ></Toolbar>

        {/* Table */}
        <DataTable
          ref={dt}
          value={rows}
          dataKey="id"
          className="bg-gray-300 w-10/12 mx-auto rounded-lg p-10 "
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
        className="bg-gray-500 p-5 text-center rounded-xl border shadow-inner"
        visible={teacherDialog}
        style={{ width: "32rem" }}
        breakpoints={{ "960px": "75vw", "641px": "90vw" }}
        modal
        footer={teacherDialogFooter}
        onHide={hideDialog}
      >
        <h2>Teacher Detail</h2>
        {/* dni */}
        <div className="my-5">
          <label htmlFor="dni" className="font-bold block">
            DNI
          </label>
          <InputText
            id="dni"
            type="number"
            value={teacher.dni}
            onChange={(e) => onInputChange(e, "dni")}
            required
            autoFocus
            // className={classNames({ "p-invalid": submitted && !teacher.dni })}
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
            id="lastname"
            value={teacher.lastname}
            onChange={(e) => onInputChange(e, "lastname")}
            required
            autoFocus
            className={classNames({
              // "p-invalid": submitted && !teacher.lastname,
            })}
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
            // className={classNames({ "p-invalid": submitted && !teacher.name })}
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
        visible={deleteTeacherDialog}
        style={{ width: "32rem" }}
        breakpoints={{ "960px": "75vw", "641px": "90vw" }}
        header="Confirm"
        modal
        footer={deleteTeacherDialogFooter}
        onHide={hideDeleteTeacherDialog}
      >
        <div className="confirmation-content">
          <i
            className="pi pi-exclamation-triangle mr-3"
            style={{ fontSize: "2rem" }}
          />
          {teacher && (
            <span>
              Are you sure you want to delete <b>{teacher.name}</b>?
            </span>
          )}
        </div>
      </Dialog>
    </div>
  );
}
