import { LinkBaseButton } from "../../../../components/Buttons";

export function Dashboard() {
  return (
    <div className="px-4 py-2 text-grey-800 flex flex-col justify-between bg-white bg-opacity-50 rounded-b-2xl mt-2">
      <h1 className="text-center text-2xl">Junta de Clacificacion docente</h1>

      <article className="flex">
        <section className="bg-red-500 p-4 m-3">
          <div>
            <h2>Turnos</h2>
            <LinkBaseButton
              classNames="font-bold rounded w-3/12 mx-auto flex justify-center bg-blue-500"
              to="/junta/ingreso/turnos"
            >
              Ir
            </LinkBaseButton>
          </div>
        </section>
      </article>
    </div>
  );
}
