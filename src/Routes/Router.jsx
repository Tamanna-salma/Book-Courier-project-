import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home/Home";
import AuthLayout from "../components/AuthLayout/AuthLayout";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import Error from "../Pages/Error";
import BookDetails from "../Pages/books/BookDetails";
import AllBooks from "../Pages/AllBooks";
import About from "../Pages/About";
import CustomerRoute from "./privateRoute/CustomerRoute";
import LibrarianRoute from "./privateRoute/LibrarianRoute";
import AdminRoute from "./privateRoute/AdminRoute";
import DashboardLayout from "../Layout/DashboardLayout";
import DashboardRoot from "../components/DashboardRoot/DashboardRoot";
import PaymentSuccess from "../components/dashboard/User-Dashboard/payment/PaymentSuccess";
import MyOrders from "../components/dashboard/User-Dashboard/MyOrders";
import Invoices from "../components/dashboard/User-Dashboard/Invoices";
import WishList from "../components/dashboard/WishList";
import AddBook from "../components/dashboard/Librarian-Dashboard/AddBook";
import MyBook from "../components/dashboard/Librarian-Dashboard/MyBook";
import UpdateBook from "../components/dashboard/User-Dashboard/UpdateBook";
import Orders from "../components/dashboard/Librarian-Dashboard/Orders";
import Profile from "../components/dashboard/User-Dashboard/Profile";
import ManageBook from "../components/dashboard/AdminDashboard/ManageBook";
import UserManagement from "../components/dashboard/AdminDashboard/UserManagement";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>
      },
      {
        path: "/allbooks",
        element: <AllBooks></AllBooks>
      },
      {
        path: '/about',
        element: <About></About>

      },

      {
        path: '/bookDetails/:id',
        loader: ({ params }) => fetch(`http://localhost:3000/Books/${params.id}`),
        element: <PrivateRoute>
          <BookDetails></BookDetails>
        </PrivateRoute>

      },

    ]
  },

  {
    path: '/auth',
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
    ]
  },
  {
    path: "/dashboard",
    element: <PrivateRoute>
      <DashboardLayout></DashboardLayout>
    </PrivateRoute>,
  
    children: [
      {
        index: true,
        element:<DashboardRoot></DashboardRoot> 
      },

      {
        path: 'my-orders',
        element: <CustomerRoute>
        <MyOrders></MyOrders>
       </CustomerRoute>

      },
      {
        path: "payment-success",
        element: <CustomerRoute>
         <PaymentSuccess></PaymentSuccess>
        </CustomerRoute>
        
      },
      {
        path: "invoices",
        element: <CustomerRoute>
        <Invoices></Invoices>
        </CustomerRoute>
       
      },
      {
        path: "wish-list",
        element: <CustomerRoute>
         <WishList></WishList>
        </CustomerRoute>
        
      }, 

      // Librarian
      {
        path: 'add-books',
        element: <LibrarianRoute>
       <AddBook></AddBook>
        </LibrarianRoute>
     
      },
      {
        path: 'my-books',
        element: <LibrarianRoute>
         <MyBook></MyBook>
        </LibrarianRoute>
     

      },
      {
        path: 'update-book/:id',
        element: <LibrarianRoute>
         <UpdateBook></UpdateBook>
        </LibrarianRoute>
      

      },
      {
        path: 'orders',
        element: <LibrarianRoute>
         <Orders></Orders>
        </LibrarianRoute>
       

      },
      {
        path: 'profile',
        element: 
       <Profile></Profile>

      },
              //admin
      {
        path:'all-user',
        element:<AdminRoute>
        <UserManagement></UserManagement>
        </AdminRoute>


      },
      {
        path:'manage-book',
        element:<AdminRoute>
      <ManageBook></ManageBook>
        </AdminRoute>
     

      }

    ]

  },
  {
    path: "/*",
    element: <Error></Error>
  }
]);
export default router;