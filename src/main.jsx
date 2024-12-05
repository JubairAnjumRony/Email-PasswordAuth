import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Login from './components/Login';
import Root from './components/Root';
import Home from './Home';
import Register from './components/Register';
import AuthProvider from './Providers/AuthProvider';
import Orders from './components/Orders';
import PrivateRoute from './routes/PrivateRoute';
// import Navbaar from './Navbaar';

const router = createBrowserRouter([
  {
    path:"/",
    element:<Root></Root>,
    children:[
      {
      path:"/",
      element:<Home></Home>
  },
  
  {
    path:"login",
    element:<Login></Login>
   },
    {
    path:"register",
    element:<Register/>
   },
   {
    path:"orders",
    element:<PrivateRoute><Orders/></PrivateRoute>
   }


]

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />

    </AuthProvider>
  </StrictMode>,
)
