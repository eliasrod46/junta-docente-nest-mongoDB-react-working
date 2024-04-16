//-------------------------------------------------
//---------------------imports---------------------
//-------------------------------------------------
import React, { useState, useEffect, useRef } from "react";
import { useTeachers } from "../hooks/useTeachers";
import { DataTable } from "primereact/datatable";

import { FromTeacher } from "../components/FormTeacher";
import { ModalTeachers } from "../components/ModalTeachers";
//----------------------------------------------------------
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

  const { teachers, getAllTeachers, saveTeacher } = useTeachers();
  const [teacher, setTeacher] = useState(emptyTeacher);
  const [errors, setErrors] = useState([]);
  const [teacherDialog, setTeacherDialog] = useState(false);
  const [globalFilter, setGlobalFilter] = useState(null);

  //----------------------------------------------------------
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

  //----------------------------------------------------------

  // save | edit teacher logic function
  const saveTeacherHandler = async () => {
    // setSubmitted(true);

    // logic to save || update teacher
    const response = await saveTeacher(teacher);
    response.errors ? setErrors(response.errors) : "";
    //restart config
    if (!response.errors) {
      getAllTeachers();
      setTeacherDialog(false);
      setTeacher(emptyTeacher);
    }
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
    <>
      <Button label="Cancel" icon="pi pi-times" outlined onClick={hideDialog} />
      <Button label="Save" icon="pi pi-check" onClick={saveTeacherHandler} />
    </>
  );

  const deleteTeacherDialogFooter = (
    <>
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
    </>
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

        {/* Table */}
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

      <ModalTeachers
        deleteTeacherDialog={deleteTeacherDialog}
        deleteTeacherDialogFooter={deleteTeacherDialogFooter}
        hideDeleteTeacherDialog={hideDeleteTeacherDialog}
        teacher={teacher}
      />

      <Dialog
        className="bg-gray-500 p-5 text-center rounded-xl border shadow-inner"
        visible={teacherDialog}
        style={{ width: "32rem" }}
        breakpoints={{ "960px": "75vw", "641px": "90vw" }}
        modal
        footer={teacherDialogFooter}
        onHide={hideDialog}
      >
        <FromTeacher
          teacher={teacher}
          errors={errors}
          submitted={submitted}
          onInputChange={onInputChange}
        />
      </Dialog>
    </div>
  );
}
