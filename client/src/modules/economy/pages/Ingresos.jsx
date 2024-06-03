import { LinkBreadCrumbs } from "../../../components/Buttons";
import { IncomesTable } from "../components/IncomesTable";

export function Ingresos() {
  return (
    <div>
      <div className="px-4 py-2 text-grey-800 flex justify-start bg-white bg-opacity-50 rounded-b-2xl mt-2 gap-x-1">
        <LinkBreadCrumbs to="/economia/dashboard" className="font-bold">
          <span className="text-sm font-bold">Dashboard</span>
        </LinkBreadCrumbs>
        <span>/</span>
        <LinkBreadCrumbs to="/economia/ingresos" className="font-bold">
          <span className="text-sm font-bold">Ingresos</span>
        </LinkBreadCrumbs>
      </div>
      <div className="px-4 py-2 text-grey-800 flex flex-col justify-between bg-white bg-opacity-50 rounded-b-2xl mt-2">
        <h1 className="text-center text-4xl font-bold">Ingresos</h1>
        <IncomesTable />
      </div>
    </div>
  );
}
