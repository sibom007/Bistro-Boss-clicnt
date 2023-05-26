import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/routes';
// import { HelmetProvider } from 'react-helmet-async';
import { HelmetProvider } from 'react-helmet-async';
import Authprovider from './Routes/Provider/Authprovider';





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
      <HelmetProvider>
        <div className='max-w-screen-xl mx-auto'>
          <RouterProvider router={router}></RouterProvider>
        </div>
      </HelmetProvider>
    </Authprovider>
  </React.StrictMode>,
)
