import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Inicio, Layout, NuevoCliente, loader as clientesLoader, action as nuevoClienteAction } from "./components/pages";

const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      children: [
        {
          index: true,
          element: <Inicio/>,
          loader: clientesLoader
        },
        {
          path:'/clientes/nuevo',
          element: <NuevoCliente/>,
          action: nuevoClienteAction
        }
      ]
    },
    {
      path: '/nosotros',
      element: <h1>Nosotros</h1>
    },
  ])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router }/>
  </React.StrictMode>,
  
)
