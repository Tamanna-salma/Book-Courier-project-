import { Navigate, useLocation } from "react-router";
import useRole from "../../components/Hooks/useRole";

import UseAuth from "../../components/Hooks/UseAuth";
import Loading from "../../Pages/Loading";


const AdminRoute = ({ children }) => {
  const {user,loading}=UseAuth();
  const [role, isRoleLoading] = useRole();
  const location=useLocation();

  if (loading || isRoleLoading) return <Loading />;

  if (role !=='admin'){
  return <Navigate state={location.pathname}to= "/auth/login"replace />;
  }
   return children;

};

export default AdminRoute;