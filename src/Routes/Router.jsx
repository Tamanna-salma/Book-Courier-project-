import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home/Home";
import Books from "../Pages/books/Books";
import AuthLayout from "../components/AuthLayout/AuthLayout";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import Error from "../Pages/Error";

 const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children:[
      {
        index:true,
        element:<Home></Home>
      },
      {
        path:"/allbooks",
        element:<Books></Books>
      },
      // {
      //   path:"/dashboard",
      //   element:<Dash
      // },
    ]
  },
  {
    path:'/auth',
    element:<AuthLayout></AuthLayout>,
    children:[
      {
        path:'/auth/login',
        element:<Login></Login>
      },
      {
        path:'/auth/register',
        element:<Register></Register>
      },
    ]
  },
  {
    path:"/*",
    element:<Error></Error>
  }
]);
 export default router;