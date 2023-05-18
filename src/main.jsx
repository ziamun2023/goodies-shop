import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './componenet/home/Home.jsx';
import Signin from './componenet/signin/Signin.jsx';
import Signup from './componenet/signup/Signup.jsx';
import AuthProvider from './contextProvider/AuthProvider.jsx';
import Mytoys from './componenet/mytoys/Mytoys.jsx';
import PrivateRoute from './privateROute/PrivateRoute.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    children:[
      {
        path:'/home',
        element:<Home/>
      },
      {
        path:'/signin',
        element:<Signin/>
      },
      {
        path:'/signup',
        element:<Signup/>
      },
      {
        path:'/mytoys',
        element:<PrivateRoute><Mytoys/></PrivateRoute>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>  <RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
