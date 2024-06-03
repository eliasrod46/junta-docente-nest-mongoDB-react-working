//====>logic funcions
// create | edit
export const saveElementHandler = async (
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
  if (!toEdit) {
    // logic to save element
    const response = await saveElementHook(element);
    response.errors ? setErrors(response.errors) : "";
    //restart config
    if (!response.errors) {
      getAllElementsHook();
      setElementDialog(false);
      setElement(emptyElement);
      // beatuty message
      toast.current.show({
        severity: "success",
        summary: "Successful",
        detail: "Categoria creada",
        life: 3000,
      });
    }
  } else {
    // logic to update element
    const response = await updateElementHook(element.id, element);
    response.errors ? setErrors(response.errors) : "";
    //restart config
    if (!response.errors) {
      getAllElementsHook();
      setElementDialog(false);
      setElement(emptyElement);
      // beatuty message
      toast.current.show({
        severity: "success",
        summary: "Successful",
        detail: "Categoria actualizada",
        life: 3000,
      });
    }
    setToEdit(false);
  }
};

//======================>Change
// delete
export const deleteElementFuction = (
  element,
  deleteCategory,
  getAllCategories,
  setElement,
  setDeleteElementDialog,
  emptyElement,
  toast
) => {
  //logic delete
  deleteCategory(element.id);
  //restart config
  //---/ToDo make list update after delete, maybe refresh
  getAllCategories();
  setDeleteElementDialog(false);
  setElement(emptyElement);

  // beatuty message
  toast.current.show({
    severity: "success",
    summary: "Successful",
    detail: "Categoria Eliminada",
    life: 3000,
  });
};

//inputChange Handler OP
export const onInputChange = (e, name, element, setElement) => {
  const val = (e.target && e.target.value) || "";
  let _element = { ...element };
  _element[`${name}`] = val;
  setElement(_element);
};
