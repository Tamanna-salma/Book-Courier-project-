

const AdminRoute = ({ children }) => {
  const [role, isRoleLoading] = useRole();
  if (isRoleLoading) return <Loading />;
  if (role === "admin") return children;
  return <Navigate to="/" replace="true" />;
};

export default AdminRoute;