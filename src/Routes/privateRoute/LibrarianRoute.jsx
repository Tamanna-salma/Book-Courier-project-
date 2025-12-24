
import { Navigate } from "react-router";
import useRole from "../../components/Hooks/useRole";
import Loading from "../../Pages/Loading";

const LibrarianRoute = ({ children }) => {
  const [role, isRoleLoading] = useRole();

  if (isRoleLoading) return <Loading />;
  if (role === "librarian") return children;
  return <Navigate to="/" replace />;
};

export default LibrarianRoute;