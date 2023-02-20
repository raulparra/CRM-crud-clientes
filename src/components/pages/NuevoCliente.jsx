import { useNavigate, Form, useActionData } from "react-router-dom"
import { Error } from "./Error";
import { Formulario } from "./Formulario";

export const action = async( { request }) =>{
  
  const formData = await request.formData();
  const datos = Object.fromEntries(formData)//--> trae todo los datos del formulario

  const errores =[]
  if (Object.values(datos).includes('')){
    errores.push('Todos los campos son obligatorios')
  }
  
  if (Object.keys(errores).length) {
      console.log('Sí hay errores');
  }
  return errores
}

export const NuevoCliente = () => {
  
  const errores = useActionData();
  const navigate = useNavigate();
  console.log(errores);

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
        {errores?.length && errores.map( ( error, i ) => <Error key={i}>{ error }</Error> )}
        <Form method="POST" >
          <Formulario/>
          <input type="submit" className=" mt-5 w-full bg-[#273746] hover:bg-[#316ba2] p-3 uppercase font-bold text-white text-lg" />
        </Form>
      </div>
    </>
  )
}
