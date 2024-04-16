import { Dialog } from "primereact/dialog";

export const ModalTeachers = ({
  deleteTeacherDialog,
  deleteTeacherDialogFooter,
  hideDeleteTeacherDialog,
  teacher,
}) => {
  return (
    <>
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
    </>
  );
};
