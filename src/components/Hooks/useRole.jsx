import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";
import UseAxiosSecure from "./UseAxiosSecure";

const useRole = () => {
  const { user, loading } = UseAuth();
  const axiosSecure = UseAxiosSecure();

  const {
    data: role,
    isLoading: isRoleLoading,
  } = useQuery({
    enabled: !loading && !!user?.email,
    queryKey: ["user-role", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${user.email}/role`);
      return res.data?.role;
    },
  });

  return [role, isRoleLoading];
};

export default useRole;