import React from "react";
import UseAuth from "../../../components/Hooks/UseAuth";
import UseAxiosSecure from "../../../components/Hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../Pages/Loading";
import UserDataRow from "../../dashboard/User-Dashboard/UserDataRow"


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
      const res = await axiosSecure.get(`/users`);
      return res.data;
    },
  });

  if (isLoading) return <Loading />;

  return (
    <div className="container mx-auto px-4 sm:px-8 py-4">
      <div className="overflow-x-auto bg-white rounded-[2rem] shadow-xl shadow-purple-600/5">
        <div className="inline-block min-w-full overflow-hidden">
          <table className="min-w-full leading-normal">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="px-6 py-5 text-xs font-black text-gray-400 uppercase tracking-[0.2em] text-center">Image</th>
                <th className="px-6 py-5 text-xs font-black text-gray-400 uppercase tracking-[0.2em] text-center">Name</th>
                <th className="px-6 py-5 text-xs font-black text-gray-400 uppercase tracking-[0.2em] text-center">Email</th>
                <th className="px-6 py-5 text-xs font-black text-gray-400 uppercase tracking-[0.2em] text-center">Role</th>
                <th className="px-6 py-5 text-xs font-black text-gray-400 uppercase tracking-[0.2em] text-center">Last Login</th>
                <th className="px-6 py-5 text-xs font-black text-gray-400 uppercase tracking-[0.2em] text-center">Action</th>
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
