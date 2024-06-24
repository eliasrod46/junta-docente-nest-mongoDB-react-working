import React, { useState, useEffect, useRef } from "react";

//====================>datatable
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import { Dialog } from "primereact/dialog";

//====================>hooks
import { useAccountMovements } from "../hooks/useAccountMovements.jsx"; //======================>Change

//====================>buttons
import {
  DangerButton,
  PurpleButton,
  InfoButton,
} from "../../../components/Buttons.jsx";

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
  editElement,
  confirmDeleteElement,
  openNew,
  hideDeleteElementDialog,
  hideDialog,
} from "./datatable/handlerModalFunction.js";

import {
  header,
  elementDialogFooter,
  deleteElementDialogFooter,
} from "./datatable/TableComponents.jsx";

import {
  ShowErrors,
  LabelModal,
  InputModal,
} from "./datatable/TableModals.jsx";

export function ExpencesTable() {
  //====================>vars
  let emptyElement = {
    //======================>Change Data
    year: "",
    month: "",
    date: "",
    mount: "",
    category: "",
    generalCategory: "",
    decription: "",
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
  const {
    expences,
    getAllExpenses,
    saveExpense,
    updateExpense,
    deleteExpense,
  } = useAccountMovements(); //======================>Change

  //====================>refs
  const toast = useRef(null);
  const dt = useRef(null);

  //====>call all elements<====
  useEffect(() => {
    getAllExpenses(); //======================>Change
  }, []);

  useEffect(() => {
    setRows(expences);
  }, [expences]); //======================>Change

  //====================>General Functions

  //====================>buttons in table
  const actionBodyTemplate = (rowData) => {
    return (
      <>
        <InfoButton
          clickHandler={() =>
            editElement(rowData, setElement, setToEdit, setElementDialog)
          }
        >
          <FontAwesomeIcon icon={faEdit} />
        </InfoButton>
        <DangerButton
          clickHandler={() =>
            confirmDeleteElement(rowData, setElement, setDeleteElementDialog)
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
      {/* element detail modal manejable */}
      <div>
        <div className="bg-gray-300 bg-opacity-90 rounded-xl border shadow-inner flex items-center justify-evenly w-1/6 p-5 py-2 mx-auto">
          <InfoButton
            clickHandler={() =>
              openNew(setElement, setElementDialog, emptyElement)
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
          header={header(setGlobalFilter, "Buscar Categorias")}
        >
          {/* //======================>Change columns */}
          {/* year */}
          <Column
            field="year"
            header="Año"
            className="w-3/12 text-center p-1 border border-x-0 border-black"
            sortable
          ></Column>
          {/* month */}
          <Column
            field="month"
            header="Mes"
            className="w-3/12 text-center p-1 border border-x-0 border-black"
            sortable
          ></Column>
          {/* date */}
          <Column
            field="date"
            header="Fecha"
            className="w-3/12 text-center p-1 border border-x-0 border-black"
            sortable
          ></Column>
          {/* mount */}
          <Column
            field="mount"
            header="Monto"
            className="w-3/12 text-center p-1 border border-x-0 border-black"
            sortable
          ></Column>
          {/* category */}
          <Column
            field="category"
            header="Categoria"
            className="w-3/12 text-center p-1 border border-x-0 border-black"
            sortable
          ></Column>
          {/* generalCategory */}
          <Column
            field="generalCategory"
            header="Categoria General"
            className="w-3/12 text-center p-1 border border-x-0 border-black"
            sortable
          ></Column>

          {/* decription */}
          <Column
            field="decription"
            header="Descripcion"
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

      {/* //======================>Change modals*/}
      {/* create element modal */}
      <Dialog
        className="bg-gray-300 bg-opacity-90 p-5 text-center rounded-xl border shadow-inner"
        visible={elementDialog}
        style={{ width: "32rem" }}
        breakpoints={{ "960px": "75vw", "641px": "90vw" }}
        modal
        footer={elementDialogFooter(
          element,
          toEdit,
          setToEdit,
          saveExpense,
          setErrors,
          getAllExpenses,
          setElementDialog,
          setElement,
          emptyElement,
          updateExpense,
          toast
        )}
        onHide={() => hideDialog(setElementDialog)}
      >
        <h2 className="text-xl font-bold">Detalles Categoria</h2>
        {/* //======================>Change */}
        {/* date */}
        <div className="my-5">
          <LabelModal id="date" label="Fecha" />
          <InputModal id="date" element={element} setElement={setElement} />
          <ShowErrors id="date" errors={errors} />
        </div>
        {/* mount */}
        <div className="my-5">
          <LabelModal id="mount" label="Monto" />
          <InputModal id="mount" element={element} setElement={setElement} />
          <ShowErrors id="mount" errors={errors} />
        </div>
        {/* category */}
        <div className="my-5">
          <LabelModal id="category" label="Categoria" />
          <InputModal id="category" element={element} setElement={setElement} />
          <ShowErrors id="category" errors={errors} />
        </div>
        {/* generalCategory */}
        <div className="my-5">
          <LabelModal id="generalCategory" label="Categoria General" />
          <InputModal
            id="generalCategory"
            element={element}
            setElement={setElement}
          />
          <ShowErrors id="generalCategory" errors={errors} />
        </div>

        {/* decription */}
        <div className="my-5">
          <LabelModal id="decription" label="Descripcion" />
          <InputModal
            id="decription"
            element={element}
            setElement={setElement}
          />
          <ShowErrors id="decription" errors={errors} />
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
        footer={deleteElementDialogFooter(
          element,
          deleteExpense,
          getAllExpenses,
          setElement,
          setDeleteElementDialog,
          emptyElement,
          toast
        )}
        onHide={() => hideDeleteElementDialog(setDeleteElementDialog)}
      >
        <div>
          {element && <span>Estas seguro de eliminar el ingreso?</span>}
        </div>
      </Dialog>
    </div>
  );
}
