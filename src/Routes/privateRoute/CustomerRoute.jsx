import { Navigate } from "react-router";
import useRole from "../../components/Hooks/useRole";
import UseAuth from "../../components/Hooks/UseAuth";
import Loading from "../../Pages/Loading";

const CustomerRoute = ({ children }) => {
  const { user, loading } = UseAuth();
  const [role, roleLoading] = useRole();

  if (loading || roleLoading) {
    return <Loading />;
  }

  if (user && role === "customer") {
    return children;
  }

  return <Navigate to="/" replace />;
};

export default CustomerRoute;
