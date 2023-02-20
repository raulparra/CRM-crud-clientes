import { useLoaderData } from "react-router-dom";
import { obtenerClientes } from "../../data/clientes";
import { Cliente } from "./Cliente";


export function loader(){
  const clientes = obtenerClientes(); 
  return clientes;
}

export const Inicio = () => {
  
  const datosClientes = useLoaderData();//recupera lo que está en el loader

  return (
    <>
      <h1 className="font-black text-4xl text-[#273746]">Clientes</h1>
      <p className="mt-3">Administra tus clientes</p>
      {
        datosClientes.length ? (
          <table className="w-full bg-white shadow mt-5 table-auto">
            <thead className="bg-[#273746] text-white">{/* fila de encabezados */}
              <tr>
                <th className="p-2">Cliente</th>{/* eancabezado de las columnas */}
                <th className="p-2">Contacto</th>
                <th className="p-2">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {
                datosClientes.map(cliente => (
                  <Cliente key={ cliente.id } cliente={ cliente }/>
                ))
              }
            </tbody>
          </table>
        ):(
          <p className="text-center mt-10">No hay clientes registrados</p>
        )
      }
    </>
  )
}
