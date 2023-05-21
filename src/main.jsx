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
import AddNewToy from './componenet/addNewToy/AddNewToy.jsx';
import Alltoys from './componenet/alltoys/Alltoys.jsx';
import DetailsView from './componenet/AllToys/DetailsView.jsx';
import Mytoys from './componenet/Myalltoys/Mytoys.jsx';
import EditmyToy from './componenet/Myalltoys/EditmyToy.jsx';
import Blogs from './componenet/blogs/Blogs.jsx';
import PrivateRoute from './privateROute/PrivateRoute.jsx';
// import DetailsView from './componenet/AllToys/DetailsView.jsx';
// import PrivateRoute from './privateROute/PrivateRoute.jsx';


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
        path:'/addnewtoy',
        element:<AddNewToy/>
      }
      ,
      {
        path:'/allToy',
        element:<Alltoys/>
      },
      {
        path:'/mytoys',
        element:<PrivateRoute><Mytoys/></PrivateRoute>
      },
      {
        path:'/editMytoy/:id',
        element:<EditmyToy/>
      },
      {
        path:"/viewFetails/:id",
        element:<DetailsView></DetailsView>
      },
      {
        path:'/blogs',
        element:<Blogs/>
      }
      
  
      
      
    
      

    
     
     
 
    
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>  <RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
