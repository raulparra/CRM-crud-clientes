import { Link, Outlet, useLocation } from "react-router-dom"

export const Layout = () => {

  const location = useLocation();

  return (
    <div className="md:flex md:min-h-screen">
      <aside className="md:w-1/4 bg-[#273746] px-5 py-10">

        <h2 className="text-4xl font-black text-center text-white">
          CRM -Clientes
        </h2>

        <nav className="mt-10">
          <Link className={`${ location.pathname === '/' ? 'text-blue-500' : 'text-white' } text-2xl block hover:text-blue-300 text-white`} to="/">
            Clientes
          </Link>
          <Link className={`${ location.pathname === '/clientes/nuevo' ? 'text-blue-500' : 'text-white' } text-2xl block hover:text-blue-300 text-white`} to="/clientes/nuevo">
            Nuevo cliente
          </Link>
        </nav>

      </aside>

      <main className="md:w-3/4 p-10 md:h-screen overflow-scroll">
        <Outlet/>
      </main>  
    </div>
  )
}