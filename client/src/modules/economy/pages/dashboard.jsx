import {
  LinkInfoButton,
  LinkSuccessButton,
  LinkBreadCrumbs,
} from "../../../components/Buttons";

export function Dashboard() {
  return (
    <>
      <div className="px-4 py-2 text-grey-800 flex justify-start bg-white bg-opacity-50 rounded-b-2xl mt-2 gap-x-1">
        <LinkBreadCrumbs to="/economia/dashboard" className="font-bold">
          <span className="text-sm font-bold">Dashboard</span>
        </LinkBreadCrumbs>
      </div>
      <div className="px-4 py-2 text-grey-800 flex flex-col justify-between bg-white bg-opacity-50 rounded-b-2xl mt-2">
        <h1 className="text-center text-4xl font-bold">Economia - Dashboard</h1>
        <LinkSuccessButton to="/economia/admin/categorias">
          categorias
        </LinkSuccessButton>
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
            <div className="bg-white bg-opacity-30 rounded-md p-2">
              <table>
                <thead className="border-b-2 border-black">
                  <tr>
                    <th className="rounded-md px-4 py-2">Categoria general</th>
                    <th className="rounded-md px-4 py-2">Previsto</th>
                    <th className="rounded-md px-4 py-2">Real</th>
                    <th className="rounded-md px-4 py-2">Diferencia</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-black">
                    <td className="rounded-md px-4 py-2 text-center">%50</td>
                    <td className="rounded-md px-4 py-2 text-center">$1235</td>
                    <td className="rounded-md px-4 py-2 text-center">$21231</td>
                    <td className="rounded-md px-4 py-2 text-center">$1213</td>
                  </tr>
                  <tr className="border-b border-black">
                    <td className="rounded-md px-4 py-2 text-center">%30</td>
                    <td className="rounded-md px-4 py-2 text-center">$1235</td>
                    <td className="rounded-md px-4 py-2 text-center">$21231</td>
                    <td className="rounded-md px-4 py-2 text-center">$1213</td>
                  </tr>
                  <tr className="border-b border-black">
                    <td className="rounded-md px-4 py-2 text-center">%20</td>
                    <td className="rounded-md px-4 py-2 text-center">$1235</td>
                    <td className="rounded-md px-4 py-2 text-center">$21231</td>
                    <td className="rounded-md px-4 py-2 text-center">$1213</td>
                  </tr>
                </tbody>
              </table>
            </div>
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
                <table>
                  <thead className="border-b-2 border-black">
                    <tr>
                      <th className="rounded-md px-4 py-2">Categoria</th>
                      <th className="rounded-md px-4 py-2">Previsto</th>
                      <th className="rounded-md px-4 py-2">Real</th>
                      <th className="rounded-md px-4 py-2">Diferencia</th>
                      <th className="rounded-md px-4 py-2">% del total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-black">
                      <td className="rounded-md px-4 py-2 text-center">
                        Departamento
                      </td>
                      <td className="rounded-md px-4 py-2 text-center">
                        $1235
                      </td>
                      <td className="rounded-md px-4 py-2 text-center">
                        $21231
                      </td>
                      <td className="rounded-md px-4 py-2 text-center">
                        $1213
                      </td>
                      <td className="rounded-md px-4 py-2 text-center">10%</td>
                    </tr>
                    <tr className="border-b border-black">
                      <td className="rounded-md px-4 py-2 text-center">
                        Servicios
                      </td>
                      <td className="rounded-md px-4 py-2 text-center">
                        $1235
                      </td>
                      <td className="rounded-md px-4 py-2 text-center">
                        $21231
                      </td>
                      <td className="rounded-md px-4 py-2 text-center">
                        $1213
                      </td>
                      <td className="rounded-md px-4 py-2 text-center">10%</td>
                    </tr>
                    <tr className="border-b border-black">
                      <td className="rounded-md px-4 py-2 text-center">
                        Servicios Lux
                      </td>
                      <td className="rounded-md px-4 py-2 text-center">
                        $1235
                      </td>
                      <td className="rounded-md px-4 py-2 text-center">
                        $21231
                      </td>
                      <td className="rounded-md px-4 py-2 text-center">
                        $1213
                      </td>
                      <td className="rounded-md px-4 py-2 text-center">10%</td>
                    </tr>
                    <tr className="border-b border-black">
                      <td className="rounded-md px-4 py-2 text-center">
                        Transporte
                      </td>
                      <td className="rounded-md px-4 py-2 text-center">
                        $1235
                      </td>
                      <td className="rounded-md px-4 py-2 text-center">
                        $21231
                      </td>
                      <td className="rounded-md px-4 py-2 text-center">
                        $1213
                      </td>
                      <td className="rounded-md px-4 py-2 text-center">10%</td>
                    </tr>
                    <tr className="border-b border-black">
                      <td className="rounded-md px-4 py-2 text-center">
                        Tarjeta de credito
                      </td>
                      <td className="rounded-md px-4 py-2 text-center">
                        $1235
                      </td>
                      <td className="rounded-md px-4 py-2 text-center">
                        $21231
                      </td>
                      <td className="rounded-md px-4 py-2 text-center">
                        $1213
                      </td>
                      <td className="rounded-md px-4 py-2 text-center">10%</td>
                    </tr>
                    <tr className="border-b border-black">
                      <td className="rounded-md px-4 py-2 text-center">
                        Salud
                      </td>
                      <td className="rounded-md px-4 py-2 text-center">
                        $1235
                      </td>
                      <td className="rounded-md px-4 py-2 text-center">
                        $21231
                      </td>
                      <td className="rounded-md px-4 py-2 text-center">
                        $1213
                      </td>
                      <td className="rounded-md px-4 py-2 text-center">10%</td>
                    </tr>
                    <tr className="border-b border-black">
                      <td className="rounded-md px-4 py-2 text-center">
                        Comida
                      </td>
                      <td className="rounded-md px-4 py-2 text-center">
                        $1235
                      </td>
                      <td className="rounded-md px-4 py-2 text-center">
                        $21231
                      </td>
                      <td className="rounded-md px-4 py-2 text-center">
                        $1213
                      </td>
                      <td className="rounded-md px-4 py-2 text-center">10%</td>
                    </tr>
                    <tr className="border-b border-black">
                      <td className="rounded-md px-4 py-2 text-center">
                        Comida Lux
                      </td>
                      <td className="rounded-md px-4 py-2 text-center">
                        $1235
                      </td>
                      <td className="rounded-md px-4 py-2 text-center">
                        $21231
                      </td>
                      <td className="rounded-md px-4 py-2 text-center">
                        $1213
                      </td>
                      <td className="rounded-md px-4 py-2 text-center">10%</td>
                    </tr>
                    <tr className="border-b border-black">
                      <td className="rounded-md px-4 py-2 text-center">
                        Supermercado
                      </td>
                      <td className="rounded-md px-4 py-2 text-center">
                        $1235
                      </td>
                      <td className="rounded-md px-4 py-2 text-center">
                        $21231
                      </td>
                      <td className="rounded-md px-4 py-2 text-center">
                        $1213
                      </td>
                      <td className="rounded-md px-4 py-2 text-center">10%</td>
                    </tr>
                    <tr className="border-b border-black">
                      <td className="rounded-md px-4 py-2 text-center">
                        Prestamos
                      </td>
                      <td className="rounded-md px-4 py-2 text-center">
                        $1235
                      </td>
                      <td className="rounded-md px-4 py-2 text-center">
                        $21231
                      </td>
                      <td className="rounded-md px-4 py-2 text-center">
                        $1213
                      </td>
                      <td className="rounded-md px-4 py-2 text-center">10%</td>
                    </tr>
                    <tr className="border-b border-black">
                      <td className="rounded-md px-4 py-2 text-center">
                        Salidas
                      </td>
                      <td className="rounded-md px-4 py-2 text-center">
                        $1235
                      </td>
                      <td className="rounded-md px-4 py-2 text-center">
                        $21231
                      </td>
                      <td className="rounded-md px-4 py-2 text-center">
                        $1213
                      </td>
                      <td className="rounded-md px-4 py-2 text-center">10%</td>
                    </tr>
                    <tr className="border-b border-black">
                      <td className="rounded-md px-4 py-2 text-center">
                        Personal
                      </td>
                      <td className="rounded-md px-4 py-2 text-center">
                        $1235
                      </td>
                      <td className="rounded-md px-4 py-2 text-center">
                        $21231
                      </td>
                      <td className="rounded-md px-4 py-2 text-center">
                        $1213
                      </td>
                      <td className="rounded-md px-4 py-2 text-center">10%</td>
                    </tr>
                  </tbody>
                </table>
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
                <table>
                  <thead className="border-b-2 border-black">
                    <tr>
                      <th className="rounded-md px-4 py-2">Categoria</th>
                      <th className="rounded-md px-4 py-2">Previsto</th>
                      <th className="rounded-md px-4 py-2">Real</th>
                      <th className="rounded-md px-4 py-2">Diferencia</th>
                      <th className="rounded-md px-4 py-2">% del total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-black">
                      <td className="rounded-md px-4 py-2 text-center">
                        Sueldo
                      </td>
                      <td className="rounded-md px-4 py-2 text-center">
                        $1235
                      </td>
                      <td className="rounded-md px-4 py-2 text-center">
                        $21231
                      </td>
                      <td className="rounded-md px-4 py-2 text-center">
                        $1213
                      </td>
                      <td className="rounded-md px-4 py-2 text-center">10%</td>
                    </tr>
                    <tr className="border-b border-black">
                      <td className="rounded-md px-4 py-2 text-center">
                        Otros Ingresos
                      </td>
                      <td className="rounded-md px-4 py-2 text-center">
                        $1235
                      </td>
                      <td className="rounded-md px-4 py-2 text-center">
                        $21231
                      </td>
                      <td className="rounded-md px-4 py-2 text-center">
                        $1213
                      </td>
                      <td className="rounded-md px-4 py-2 text-center">10%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </article>
          </div>
        </section>
      </div>
    </>
  );
}
