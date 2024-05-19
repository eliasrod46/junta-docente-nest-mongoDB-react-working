import { ShiftsTable } from "../components/ShiftsTable";

export function Shifts() {
  return (
    <div className="px-4 py-2 text-grey-800 flex flex-col justify-between bg-white bg-opacity-50 rounded-b-2xl mt-2">
      <h1 className="text-center text-2xl">Turnos</h1>
      <ShiftsTable />
    </div>
  );
}
