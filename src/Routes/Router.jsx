import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home/Home";
import AuthLayout from "../components/AuthLayout/AuthLayout";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import Error from "../Pages/Error";
import Dashboard from "../Layout/dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import BookDetails from "../Pages/books/BookDetails";
import AllBooks from "../Pages/AllBooks";
import About from "../Pages/About";
import MyOrders from "../Layout/dashboard/User-Dashboard/MyOrders";
import SendOrders from "../Layout/dashboard/User-Dashboard/SendOrders";
import Payment from "../Layout/dashboard/User-Dashboard/payment/Payment";

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
        element:<AllBooks></AllBooks>
      },
      {
        path:'/about',
        element:<About></About>

      },
      
      {
        path:'/bookDetails/:id',
        loader:({params})=>fetch(`http://localhost:3000/Books/${params.id}`),
        element:<PrivateRoute>
          <BookDetails></BookDetails>
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
        path:"/dashboard",
        element:<PrivateRoute>
          <Dashboard></Dashboard>
        </PrivateRoute>,
        children:[
          {
            path:'myorders',
            element:<MyOrders></MyOrders>
          },
          {
            path:'send-orders',
            element:<SendOrders></SendOrders>,
            loader:()=>fetch('/service.json').then(res=>res.json())
          },
          {
            path:'payment/:ordersId',
            element:<Payment></Payment>
         
          }
        ]
        
      },
  {
    path:"/*",
    element:<Error></Error>
  }
]);
 export default router;