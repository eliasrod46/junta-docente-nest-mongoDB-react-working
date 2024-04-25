import React, { useState, useEffect, useRef } from "react";
import { useShifts } from "../hooks/useShifts"; ///------>>> import hook(edit)

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
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { Toolbar } from "primereact/toolbar";

///------>>> from hook(edit)
export function ShiftsTable() {
  //====================>vars
  let emptyElement = {
    ///------>>> from hook(edit)
    type: "",
    date: "",
    time: "",
    year: "",
  };

  //====================>states
  const [errors, setErrors] = useState([]);
  const [globalFilter, setGlobalFilter] = useState(null);
  const [element, setElement] = useState(emptyElement);
  const [rows, setRows] = useState([]);

  const [elementDialog, setElementDialog] = useState(false);
  const [deleteElementDialog, setDeleteElementDialog] = useState(false);
  const [toEdit, setToEdit] = useState(false);

  //====================>hooks
  const { shifts, getAllShifts, saveShift } = useShifts(); ///------>>> hook(edit)

  //====================>refs
  const toast = useRef(null);
  const dt = useRef(null);

  //====>call all teachers<====
  useEffect(() => {
    ///------>>> hook(edit)
    getAllShifts();
  }, []);

  ///------>>> hook(edit)
  useEffect(() => {
    setRows(shifts);
  }, [shifts]);

  //====================>functions

  //====>create | edit | delete  teachers<====

  //====>handler modals funcions
  // create
  const openModalCreateNewElement = () => {
    // save element empty
    setElement(emptyElement);
    // set submitted in false
    // setSubmitted(false);
    // open modal
    setElementDialog(true);
  };

  // edit
  const openModalEditNewElement = (_element) => {
    // save element in template
    setElement({ ..._element });
    setToEdit(true);
    // open modal
    setElementDialog(true);
  };

  // delete
  const confirmDeleteElement = (_element) => {
    setElement(_element);
    setDeleteElementDialog(true);
  };

  //====>logic funcions
  // create | edit
  const saveEditElement = async () => {
    if (!toEdit) {
      // logic to save element
      const response = await saveShift(element); ///------>>> hook(edit)
      response.errors ? setErrors(response.errors) : "";
      //restart config
      if (!response.errors) {
        getAllTeachers(); ///------>>> hook(edit)
        setElementDialog(false);
        setElement(emptyElement);
        // beatuty message
        toast.current.show({
          severity: "success",
          summary: "Successful",
          detail: "Turno added ",
          life: 3000,
        });
      }
    } else {
      // // logic to update element
      // const response = await updateElement(element.id, element); ///------>>> hook(edit)
      // response.errors ? setErrors(response.errors) : "";
      // //restart config
      // if (!response.errors) {
      //   getAllTeachers(); ///------>>> hook(edit)
      setElementDialog(false);
      setElement(emptyElement);
      //   // beatuty message
      //   toast.current.show({
      //     severity: "success",
      //     summary: "Successful",
      //     detail: "Turno updated ",
      //     life: 3000,
      //   });
      // }
      setToEdit(false);
    }
  };

  // delete
  const deleteElementFunction = () => {
    // //logic to delete element
    // deleteElement(element.id); ///------>>> hook(edit)
    // //restart config
    // //---/ToDo make list update after delete, maybe refresh
    // getAllTeachers(); ///------>>> hook(edit)
    setDeleteElementDialog(false);
    setElement(emptyElement);

    // // beatuty message
    // toast.current.show({
    //   severity: "success",
    //   summary: "Successful",
    //   detail: "element Deleted",
    //   life: 3000,
    // });
  };

  //====>reset modal funcions
  // create | edit
  const hideDialog = () => {
    // setSubmitted(false);
    setElementDialog(false);
  };

  // delete
  const hideDeleteElementDialog = () => {
    setDeleteElementDialog(false);
  };

  //====>footer Modals
  // create | edit  painted
  const elementDialogFooter = (
    // buttons to save
    <>
      <DangerButton clickHandler={hideDialog}>Cancelar</DangerButton>
      <SuccessButton clickHandler={saveEditElement}>Guardar</SuccessButton>
    </>
  );

  // delete   painted
  const deleteElementDialogFooter = (
    // buttons to delete

    <div className="pt-5">
      <InfoButton clickHandler={hideDeleteElementDialog}>No</InfoButton>
      <DangerButton clickHandler={deleteElementFunction}>Si</DangerButton>
    </div>
  );

  //====>General Functions<====

  // input chande handler
  const onInputChange = (e, name) => {
    const val = (e.target && e.target.value) || "";
    let _element = { ...element };
    _element[`${name}`] = val;
    setElement(_element);
  };

  // global search ok styled
  const header = (
    <div className="flex flex-col align-items-center p-2 text-right">
      {/* edit */}
      <h4 className="text-md">Buscar Turno:</h4>
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
        <InfoButton clickHandler={() => openModalEditNewElement(rowData)}>
          Editar
        </InfoButton>
        <DangerButton clickHandler={() => confirmDeleteElement(rowData)}>
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
          <InfoButton clickHandler={openModalCreateNewElement}>
            Nuevo
          </InfoButton>
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
          {/* year */}
          <Column
            field="year"
            header="Año"
            className="w-2/12 text-center p-1 border border-x-0 border-black"
            sortable
          ></Column>
          {/* type */}
          <Column
            className="w-2/12 text-center p-1 border border-x-0 border-black"
            field="type"
            header="Tipo"
            sortable
          ></Column>
          {/* date */}
          <Column
            field="date"
            header="Fecha"
            className="w-3/12 text-center p-1 border border-x-0 border-black"
            sortable
          ></Column>
          {/* time */}
          <Column
            field="time"
            header="Hora"
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
        visible={elementDialog}
        style={{ width: "32rem" }}
        breakpoints={{ "960px": "75vw", "641px": "90vw" }}
        modal
        footer={elementDialogFooter}
        onHide={hideDialog}
      >
        <h2>Detalles Turno</h2>

        {/* type */}
        <div className="my-5">
          <label htmlFor="type" className="font-bold block">
            Nombre
          </label>
          <InputText
            id="type"
            value={element.type}
            onChange={(e) => onInputChange(e, "type")}
            required
            autoFocus
            className="text-md p-1 rounded-lg"
          />
          <ul>
            {errors.map((error, i) => {
              return (
                error.path === "type" && (
                  <li key={i}>
                    <small className="p-error">{error.msg}</small>
                  </li>
                )
              );
            })}
          </ul>
        </div>

        {/* year */}
        <div className="my-5">
          <label htmlFor="year" className="font-bold block">
            Año
          </label>
          <InputText
            id="year"
            className="text-md p-1 rounded-lg"
            type="number"
            value={element.year}
            onChange={(e) => onInputChange(e, "year")}
            required
            autoFocus
          />
          <ul>
            {errors.map((error, i) => {
              return (
                error.path === "year" && (
                  <li key={i}>
                    <small className="p-error">{error.msg}</small>
                  </li>
                )
              );
            })}
          </ul>
        </div>

        {/* date */}
        <div className="my-5">
          <label htmlFor="date" className="font-bold block">
            Fecha
          </label>
          <InputText
            className="text-md p-1 rounded-lg"
            id="date"
            type="date"
            value={element.date}
            onChange={(e) => onInputChange(e, "date")}
            required
            autoFocus
          />
          <ul>
            {errors.map((error, i) => {
              return (
                error.path === "date" && (
                  <li key={i}>
                    <small className="p-error">{error.msg}</small>
                  </li>
                )
              );
            })}
          </ul>
        </div>

        {/* time */}
        <div className="my-5">
          <label htmlFor="time" className="font-bold block">
            Tiempo
          </label>
          <InputText
            className="text-md p-1 rounded-lg"
            id="time"
            type="time"
            value={element.time}
            onChange={(e) => onInputChange(e, "time")}
            required
            autoFocus
          />
          <ul>
            {errors.map((error, i) => {
              return (
                error.path === "time" && (
                  <li key={i}>
                    <small className="p-error">{error.msg}</small>
                  </li>
                )
              );
            })}
          </ul>
        </div>
      </Dialog>

      {/* delete element modal */}
      <Dialog
        className="bg-gray-300 bg-opacity-90 p-5 text-center rounded-xl border shadow-inner"
        visible={deleteElementDialog}
        style={{ width: "32rem" }}
        breakpoints={{ "960px": "75vw", "641px": "90vw" }}
        header="Confirm"
        modal
        footer={deleteElementDialogFooter}
        onHide={hideDeleteElementDialog}
      >
        <div>
          {element && (
            <span>
              Estas seguro de eliminar al docente <b>{element.date}</b>?
            </span>
          )}
        </div>
      </Dialog>
    </div>
  );
}
