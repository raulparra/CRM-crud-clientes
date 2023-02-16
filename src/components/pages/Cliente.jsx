
export const Cliente = ({ cliente }) => {
    const { id, nombre, telefono, email, empresa } = cliente;
  return (
    <>
    <tr className="border-b">
        <td className="p-6">
            <p className="text-2xl text-gray-800">{ nombre }</p>
            <p>{ empresa }</p>
        </td>
        <td className="p-6">
            <p className="text-gray-600">
                <span className="text-gray-800 uppercase font-bold">
                Email:
                </span>
                { email }
            </p>
            <p className="text-gray-600">
                <span className="text-gray-800 uppercase font-bold">
                Teléfono: 
                </span>
                { telefono }
            </p>
        </td>
        <td className="p-6 flex gap-3">
            <button type="button" className="text-[#273746] hover:text-blue-600 uppercase font-bold text-xs">
                Editar
            </button>
            <button type="button" className="text-red-800 hover:text-[#E4190F] uppercase font-bold text-xs">
                Eliminar
            </button>
        </td>

    </tr>
    </>
  )
}
