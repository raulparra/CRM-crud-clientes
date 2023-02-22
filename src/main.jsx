import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Inicio, Layout, NuevoCliente, loader as clientesLoader, action as nuevoClienteAction  } from "./components/pages";
import {EditarCliente, loader as editarClienteLoader, action as editarClienteAction} from './components/pages/EditarCliente';
import { ErrorPage } from './components/pages/ErrorPage';
import { action as eliminarClienteAction } from './components/pages/Cliente';

const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      children: [
        {
          index: true,
          element: <Inicio/>,
          loader: clientesLoader,
          errorElement: <ErrorPage/>
        },
        {
          path:'/clientes/nuevo',
          element: <NuevoCliente/>,
          action: nuevoClienteAction
        }, 
        {
          path: '/clientes/:clienteId/editar',
          element: <EditarCliente/>,
          loader: editarClienteLoader,
          action: editarClienteAction
        },
        {
          path: '/clientes/:clienteId/eliminar',
          action: eliminarClienteAction
        }
      ]
    },
    {
      path: '/nosotros',
      element: <h1>Nosotros</h1>
    }
  ])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router }/>
  </React.StrictMode>,
  
)
