import React, { useContext } from 'react'
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
import AuthProvider, { AuthContext } from './contextProvider/AuthProvider.jsx';
// import Mytoys from './componenet/mytoys/Mytoys.jsx';
import PrivateRoute from './privateROute/PrivateRoute.jsx';
// import AddNewToy from './componenet/mytoys/AddNewToy.jsx';
import Alltoys from './componenet/alltoys/Alltoys.jsx';
import Bookings from './componenet/bookings/Bookings.jsx';
// import BookService from './componenet/Bookings/BookService.jsx';
import AddToy from './componenet/mytoys/AddToy.jsx';

// import Checkout from './componenet/chechout/AddToy.jsx';
// import Bookings from './componenet/bookings/Bookings.jsx';
// import AddToy from './componenet/bookings/AddToy.jsx';
// import AddToy from './componenet/chechout/Checkout.jsx';

// const {user}=useContext(AuthContext)
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
        path:'/mytoybooked',
        element:<PrivateRoute><Bookings/></PrivateRoute>
      },
      {
        path:'/bookNewTOy',
        element:<PrivateRoute><AddToy/></PrivateRoute>
      },
      

    
     
     
      {
        path:'/alltoys',
        element:<Alltoys/>
      }
    
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>  <RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
