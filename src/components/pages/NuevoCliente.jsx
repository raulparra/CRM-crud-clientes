import { useNavigate } from "react-router-dom"


export const NuevoCliente = () => {
  
  const navigate = useNavigate();

  return (
    <>
      <h1 className="font-black text-4xl text-[#273746]">Nuevo cliente</h1>
      <p className="mt-3">Ingresa la información</p>

      <div className="flex justify-end">
        <button  onClick={ () => navigate(-1) } className="bg-[#316ba2] hover:bg-blue-800 text-white px-3 py-1 font-bold uppercase ">
          <span className="font-bold">←</span> Regresar
        </button>
      </div>

      <div className="bg-white shadow rounded-md md:w3/4 mx-auto px-5 py-10 mt-10">
        <p>Formulario</p>
      </div>
    </>
  )
}
