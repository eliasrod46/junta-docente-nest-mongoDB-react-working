//---open modal to edit
export const editElement = (
  element,
  setElement,
  setToEdit,
  setElementDialog
) => {
  // save element in template
  setElement({ ...element });
  setToEdit(true);
  // open modal
  setElementDialog(true);
};

//---open modal to delete
export const confirmDeleteElement = (
  element,
  setElement,
  setDeleteElementDialog
) => {
  setElement(element);
  setDeleteElementDialog(true);
};

//---open modal to create
export const openNew = (setElement, setElementDialog, emptyElement) => {
  // save element empty
  setElement(emptyElement);
  // set submitted in false
  // setSubmitted(false);
  // open modal
  setElementDialog(true);
};

//====>reset modal Handler
// close modal delete
export const hideDeleteElementDialog = (setDeleteElementDialog) => {
  setDeleteElementDialog(false);
};

// close modal create | edit
export const hideDialog = (setElementDialog) => {
  setElementDialog(false);
};
