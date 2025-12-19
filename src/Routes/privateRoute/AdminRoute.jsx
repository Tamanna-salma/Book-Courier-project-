import { Navigate } from "react-router";
import useRole from "../../components/Hooks/useRole";
import Loading from "../../Pages/Loading";


const AdminRoute = ({ children }) => {
  const [role, isRoleLoading] = useRole();
  if (isRoleLoading) return <Loading />;
  if (role === "admin") return children;
  return <Navigate to="/" replace />;
};

export default AdminRoute;