//-------------------------------------------------
//---------------------imports---------------------
//-------------------------------------------------
import React, { useState, useEffect, useRef } from "react";
import { useTeachers } from "../hooks/useTeachers";
import { DataTable } from "primereact/datatable";

//----------------------------------------------------------
import { classNames } from "primereact/utils";
import { Column } from "primereact/column";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { Toolbar } from "primereact/toolbar";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";

export function Teachers() {
  //-------------------------------------------------
  //----------------------hooks----------------------
  //-------------------------------------------------

  let emptyTeacher = {
    dni: "",
    lastname: "",
    name: "",
  };
  const { teachers, getAllTeachers } = useTeachers();
  const [teacher, setTeacher] = useState(emptyTeacher);

  //----------------------------------------------------------
  const [teacherDialog, setTeacherDialog] = useState(false);
  const [globalFilter, setGlobalFilter] = useState(null);
  const [deleteTeacherDialog, setDeleteTeacherDialog] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const toast = useRef(null);
  const dt = useRef(null);

  //-------------------------------------------------
  //--------------------Functions--------------------
  //-------------------------------------------------

  useEffect(() => {
    getAllTeachers();
  }, []);

  // create new teacher handler function
  const openNew = () => {
    // save teacher empty
    setTeacher(emptyTeacher);
    // set submitted in false
    setSubmitted(false);
    // open modal
    setTeacherDialog(true);
  };

  // edit teacher handler function
  const editTeacher = (teacher) => {
    // save teacher in template
    setTeacher({ ...teacher });
    // open modal
    setTeacherDialog(true);
  };

  // gloabal search ok
  const header = (
    <div className="flex flex-wrap gap-2 align-items-center justify-content-between">
      <h4 className="m-0">Manage Products</h4>
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText
          type="search"
          onInput={(e) => setGlobalFilter(e.target.value)}
          placeholder="Search..."
        />
      </span>
    </div>
  );

  // input chande handler
  const onInputChange = (e, name) => {
    const val = (e.target && e.target.value) || "";
    let _teacher = { ...teacher };
    _teacher[`${name}`] = val;
    setTeacher(_teacher);
  };

  //reset config
  const hideDialog = () => {
    setSubmitted(false);
    setTeacherDialog(false);
  };

  //----------------------------------------------------------

  // save | edit teacher logic function
  const saveTeacher = () => {
    // setSubmitted(true);

    console.log(teacher);

    //logic to save || update teacher
    //restart config
    // getAllTeachers();
    // setTeacherDialog(false);
    // setTeacher(emptyProduct);
  };

  // delete teacher handler function
  const confirmDeleteTeacher = (teacher) => {
    setTeacher(teacher);
    setDeleteTeacherDialog(true);
  };

  // save | edit teacher logic function
  const deleteProduct = () => {
    //logic to save || update teacher

    //restart config
    getAllTeachers();
    setDeleteTeacherDialog(false);
    setTeacher(emptyProduct);

    // beatuty message
    toast.current.show({
      severity: "success",
      summary: "Successful",
      detail: "Product Deleted",
      life: 3000,
    });
  };

  const hideDeleteTeacherDialog = () => {
    setDeleteTeacherDialog(false);
  };

  const exportCSV = () => {
    dt.current.exportCSV();
  };

  // button add teacher
  const leftToolbarTemplate = () => {
    return (
      <div className="flex flex-wrap gap-2">
        <Button
          label="New"
          icon="pi pi-plus"
          severity="success"
          onClick={openNew}
        />
      </div>
    );
  };

  // button export data
  const rightToolbarTemplate = () => {
    return (
      <Button
        label="Export"
        icon="pi pi-upload"
        className="p-button-help"
        onClick={exportCSV}
      />
    );
  };

  const actionBodyTemplate = (rowData) => {
    return (
      <>
        <Button
          icon="pi pi-pencil"
          rounded
          outlined
          className="fa fa-home"
          onClick={() => editTeacher(rowData)}
        >
          edit
        </Button>
        <i className="fas fa-home" />

        <Button
          icon="pi pi-trash"
          rounded
          outlined
          severity="danger"
          onClick={() => confirmDeleteTeacher(rowData)}
        >
          delete
        </Button>
      </>
    );
  };

  const teacherDialogFooter = (
    <React.Fragment>
      <Button label="Cancel" icon="pi pi-times" outlined onClick={hideDialog} />
      <Button label="Save" icon="pi pi-check" onClick={saveTeacher} />
    </React.Fragment>
  );

  const deleteTeacherDialogFooter = (
    <React.Fragment>
      <Button
        label="No"
        icon="pi pi-times"
        outlined
        onClick={hideDeleteTeacherDialog}
      />
      <Button
        label="Yes"
        icon="pi pi-check"
        severity="danger"
        onClick={deleteProduct}
      />
    </React.Fragment>
  );

  return (
    <div>
      <Toast ref={toast} />
      <div className="card">
        <Toolbar
          // className="mb-4"
          left={leftToolbarTemplate}
          right={rightToolbarTemplate}
        ></Toolbar>

        <DataTable
          ref={dt}
          value={teachers}
          dataKey="id"
          className="bg-green-300 bg-opacity-25 w-10/12 mx-auto rounded-lg p-10 "
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

      {/* teacher detail modal manejable */}
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
        <div className="my-5">
          <label htmlFor="dni" className="font-bold block">
            DNI
          </label>
          <InputText
            id="dni"
            value={teacher.dni}
            onChange={(e) => onInputChange(e, "dni")}
            required
            autoFocus
            className={classNames({ "p-invalid": submitted && !teacher.dni })}
          />
          {submitted && !teacher.dni && (
            <small className="p-error">Nombre is required.</small>
          )}
        </div>

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
              "p-invalid": submitted && !teacher.lastname,
            })}
          />
          {submitted && !teacher.name && (
            <small className="p-error">Apellido is required.</small>
          )}
        </div>

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
            className={classNames({ "p-invalid": submitted && !teacher.name })}
          />
          {submitted && !teacher.name && (
            <small className="p-error">Nombre is required.</small>
          )}
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
