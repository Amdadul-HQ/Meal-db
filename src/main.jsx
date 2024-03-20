import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './component/Home/Home.jsx';
import Service from './component/Service/Service.jsx';
import Contract from './component/Contract/Contract.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    children: [
      {
        path:'/service',
        element:<Service></Service>
      },
      {
        path:'/contact',
        element:<Contract></Contract>
      }
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
