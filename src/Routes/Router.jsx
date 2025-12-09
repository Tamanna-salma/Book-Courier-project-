import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home/Home";
import Books from "../Pages/books/Books";

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
    ]
  },
]);
 export default router;