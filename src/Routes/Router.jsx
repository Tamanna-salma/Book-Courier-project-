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
import MyOrders from "../Layout/dashboard/User-Dashboard/MyOrders";
import CustomerRoute from "./privateRoute/CustomerRoute";
import PaymentSuccess from "../Layout/dashboard/User-Dashboard/payment/PaymentSuccess";
import Invoices from "../Layout/dashboard/User-Dashboard/Invoices";
import WishList from "../Layout/dashboard/WishList";
import LibrarianRoute from "./privateRoute/LibrarianRoute";
import MyBook from "../Layout/dashboard/Librarian-Dashboard/MyBook";
import UpdateBook from "../Layout/UpdateBook";
import Orders from "../Layout/dashboard/Librarian-Dashboard/Orders";
import Profile from "../Layout/dashboard/User-Dashboard/Profile";
import AdminRoute from "./privateRoute/AdminRoute";
import UserManagement from "../Layout/dashboard/AdminDashboard/UserManagement";
import ManageBook from "../Layout/dashboard/AdminDashboard/ManageBook";
import AddBook from "../Layout/dashboard/Librarian-Dashboard/AddBook";
import DashboardLayout from "../Layout/DashboardLayout";
import DashboardRoot from "../components/DashboardRoot/DashboardRoot";


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
        path: '/auth/login',
        element: <Login></Login>
      },
      {
        path: '/auth/register',
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
        path: 'myOrders',
        element: <CustomerRoute>
          <MyOrders></MyOrders>
        </CustomerRoute>

      },
      {
        path: "paymentSuccess",
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
        path: "wishlist",
        element: <CustomerRoute>
          <WishList></WishList>
        </CustomerRoute>
      }, 

      // Librarian
      {
        path: 'addbooks',
        element: <LibrarianRoute>
        <AddBook></AddBook>
        </LibrarianRoute>
      },
      {
        path: 'mybooks',
        element: <LibrarianRoute>
          <MyBook></MyBook>
        </LibrarianRoute>

      },
      {
        path: 'updateBook/:id',
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
        path:'allUser',
        element:<AdminRoute>
          <UserManagement></UserManagement>
        </AdminRoute>

      },
      {
        path:'manageBook',
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