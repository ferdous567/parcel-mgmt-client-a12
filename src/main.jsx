import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Router.jsx'
import {Helmet} from "react-helmet";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <div className='max-w-screen-xl mx-auto'>
      <Helmet>
        <title>ProShip Management</title>
      </Helmet>
     <RouterProvider router={router} />
     </div>
  </React.StrictMode>,
)
