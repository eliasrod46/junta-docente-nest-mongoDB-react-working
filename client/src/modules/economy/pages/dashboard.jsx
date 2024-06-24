import {
  LinkInfoButton,
  LinkSuccessButton,
  LinkBreadCrumbs,
} from "../../../components/Buttons";
import { SimpleTable } from "../components/dashboard/SimpleTable";
import { useEffect, useState } from "react";
import { useAccountMovements } from "../hooks/useAccountMovements";

export function Dashboard() {
  const [savedData, setSavedData] = useState([]);
  const [columns, setColumns] = useState({
    generalColumns: ["Categoria", "Monto", "% del Total"],
  });

  const { dashboardData, getDashboardData } = useAccountMovements();

  useEffect(() => {
    getDashboardData();
  }, []);

  useEffect(() => {
    setSavedData(dashboardData);
    console.log(dashboardData);
  }, [dashboardData]);

  return (
    <>
      {/* BreadCrumbs */}
      <div className="px-4 py-2 text-grey-800 flex justify-start bg-white bg-opacity-50 rounded-b-2xl mt-2 gap-x-1">
        <LinkBreadCrumbs to="/economia/dashboard" className="font-bold">
          <span className="text-sm font-bold">Dashboard</span>
        </LinkBreadCrumbs>
      </div>
      {/* body */}
      <div className="px-4 py-2 text-grey-800 flex flex-col justify-between bg-white bg-opacity-50 rounded-b-2xl mt-2">
        <h1 className="text-center text-4xl font-bold">Economia - Dashboard</h1>
        {/* <LinkSuccessButton to="/economia/admin/categorias">
          categorias
        </LinkSuccessButton> */}
        {/* resumen general */}
        <section className="flex items-center justify-around px-4 py-2 text-grey-800 bg-black bg-opacity-30 rounded-2xl mt-2">
          <article className="w-2/12 flex flex-col px-4 py-2 text-grey-800 bg-white bg-opacity-30 rounded-2xl mt-2">
            <h3 className="text-center text-2xl font-bold my-2">Gastos</h3>
            <div className="flex justify-between my-1 text-xl">
              <span className="font-bold">Real:</span>
              <span>$2000</span>
            </div>
            <div className="flex justify-between my-1 text-xl">
              <span className="font-bold">Previsto:</span>
              <span>$1500</span>
            </div>
            <div className="flex justify-between my-1 text-xl">
              <span className="font-bold">Diferencia:</span>
              <span>$1500</span>
            </div>
          </article>
          <article className="w-2/12 flex flex-col px-4 py-2 text-grey-800 bg-white bg-opacity-30 rounded-2xl mt-2">
            <h3 className="text-center text-2xl font-bold my-2">Ingresos</h3>
            <div className="flex justify-between my-1 text-xl">
              <span className="font-bold">Real:</span>
              <span>$2000</span>
            </div>
            <div className="flex justify-between my-1 text-xl">
              <span className="font-bold">Previsto:</span>
              <span>$1500</span>
            </div>
            <div className="flex justify-between my-1 text-xl">
              <span className="font-bold">Diferencia:</span>
              <span>$1500</span>
            </div>
          </article>
        </section>
        {/* Categorias Generales */}
        <section className="px-4 py-2 text-grey-800 flex flex-col justify-between bg-black bg-opacity-30 rounded-2xl mt-2">
          <h3 className="text-center text-2xl font-bold">
            Gastos - Categorias Generales
          </h3>
          <article className="mx-auto my-5">
            <SimpleTable
              columns={columns.generalColumns}
              data={savedData.generalResume}
            />
          </article>
        </section>
        {/* resumen ingresos y egresos */}
        <section className="px-4 py-2 text-grey-800 flex flex-col justify-between bg-black bg-opacity-30 rounded-2xl mt-2">
          <h3 className="text-center text-2xl font-bold my-6">
            Gastos - resumen ingresos y egresos
          </h3>
          <div className="flex justify-around items-start my-3">
            <article className="">
              <div className="bg-white bg-opacity-60 rounded-md p-2">
                <div className="flex justify-between">
                  <LinkInfoButton to="/economia/egresos">
                    Agregar Gasto
                  </LinkInfoButton>
                  <div>
                    <label className="mx-2" htmlFor="">
                      Buscar:{" "}
                    </label>
                    <input type="text" />
                  </div>
                </div>
                <SimpleTable
                  columns={columns.generalColumns}
                  data={savedData.expensesResume}
                />
              </div>
            </article>
            <article className="">
              <div className="bg-white bg-opacity-60 rounded-md p-2">
                <div className="flex justify-between">
                  <LinkSuccessButton to="/economia/ingresos">
                    Agregar Ingreso
                  </LinkSuccessButton>
                  <div>
                    <label className="mx-2" htmlFor="">
                      Buscar:{" "}
                    </label>
                    <input type="text" />
                  </div>
                </div>
                <SimpleTable
                  columns={columns.generalColumns}
                  data={savedData.incomesResume}
                />
              </div>
            </article>
          </div>
        </section>
      </div>
    </>
  );
}
