// input chande handler
import { InputText } from "primereact/inputtext";
import {
  saveElementHandler,
  deleteElementFuction,
} from "./handlerLogicFunction.js";
import { hideDialog, hideDeleteElementDialog } from "./handlerModalFunction.js";
import {
  DangerButton,
  SuccessButton,
  InfoButton,
} from "../../../../components/Buttons";

//---Header Table
export const header = (setGlobalFilter, label) => {
  return (
    <div className="flex flex-col align-items-center p-2 text-right">
      <h4 className="text-md">{label}:</h4>
      <span>
        <InputText
          className="text-md p-1 rounded-lg"
          type="search"
          onInput={(e) => setGlobalFilter(e.target.value)}
          placeholder={label}
        />
      </span>
    </div>
  );
};

//====================>footer Modals
//-- add/update Element
export const elementDialogFooter = (
  element,
  toEdit,
  setToEdit,
  saveElementHook,
  setErrors,
  getAllElementsHook,
  setElementDialog,
  setElement,
  emptyElement,
  updateElementHook,
  toast
) => {
  return (
    <>
      <DangerButton clickHandler={() => hideDialog(setElementDialog)}>
        Cancelar
      </DangerButton>
      <SuccessButton
        clickHandler={() =>
          saveElementHandler(
            element,
            toEdit,
            setToEdit,
            saveElementHook,
            setErrors,
            getAllElementsHook,
            setElementDialog,
            setElement,
            emptyElement,
            updateElementHook,
            toast
          )
        }
      >
        Guardar
      </SuccessButton>
    </>
  );
};

//======================>Change
//-- delete Element
export const deleteElementDialogFooter = (
  element,
  deleteElementHook,
  getAllElementsHook,
  setElement,
  setDeleteElementDialog,
  emptyElement,
  toast
) => {
  // buttons to delete
  return (
    <div className="pt-5">
      <InfoButton
        clickHandler={() => hideDeleteElementDialog(setDeleteElementDialog)}
      >
        No
      </InfoButton>
      <DangerButton
        clickHandler={() =>
          deleteElementFuction(
            element,
            deleteElementHook,
            getAllElementsHook,
            setElement,
            setDeleteElementDialog,
            emptyElement,
            toast
          )
        }
      >
        Si
      </DangerButton>
    </div>
  );
};
