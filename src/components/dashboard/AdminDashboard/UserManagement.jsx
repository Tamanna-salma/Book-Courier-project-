import React from "react";
import UseAuth from "../../../components/Hooks/UseAuth";
import UseAxiosSecure from "../../../components/Hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../Pages/Loading";


const UserManagement = () => {
  const { user } = UseAuth();
  const axiosSecure = UseAxiosSecure();

  const {
    data: allUsers = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["all-user", user?.email],
   
    queryFn: async () => {
      const res = await axiosSecure.get(`/all-user/${user.email}`);
      return res.data;
    },
  });

  if (isLoading) return <Loading />;

  return (
    <div className="container mx-auto px-4 sm:px-8 py-8">
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
          <table className="min-w-full leading-normal">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-5 py-3 text-center">Image</th>
                <th className="px-5 py-3 text-center">Name</th>
                <th className="px-5 py-3 text-center">Email</th>
                <th className="px-5 py-3 text-center">Role</th>
                <th className="px-5 py-3 text-center">Last Login</th>
                <th className="px-5 py-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {allUsers.map((user) => (
                <UserDataRow
                  key={user._id}
                  users={user}
                  refetch={refetch}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
