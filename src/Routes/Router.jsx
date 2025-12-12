import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home/Home";
import Books from "../Pages/books/Books";
import AuthLayout from "../components/AuthLayout/AuthLayout";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import Error from "../Pages/Error";
import Dashboard from "../Layout/dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import BookDetails from "../Pages/books/BookDetails";

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
      {
        path:'/bookDetails/:id',
        loader:({params})=>fetch(`http://localhost:3000/Books/${params.id}`),
        element:<BookDetails></BookDetails>

      },
      {
        path:"/dashboard",
        element:<PrivateRoute>
          <Dashboard></Dashboard>
        </PrivateRoute>
      },
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