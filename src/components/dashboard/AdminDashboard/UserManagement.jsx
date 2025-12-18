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
    queryKey: ["allUser", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/allUser/${user.email}`);
      return res.data;
    },
  });
  if (isLoading) return <Loading />;

  return (
    <div>
      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr className="bg-gray-200">
                    <th
                      scope="col"
                      className="px-5 py-3   border-b text-center font-semibold border-gray-200 text-gray-800   text-sm uppercase "
                    >
                      Image
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3   border-b text-center font-semibold border-gray-200 text-gray-800   text-sm uppercase "
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3   border-b text-center font-semibold border-gray-200 text-gray-800 "
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3   border-b text-center font-semibold border-gray-200 text-gray-800"
                    >
                      Role
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 text-nowrap  border-b text-center font-semibold border-gray-200 text-gray-800 "
                    >
                      Last Login
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3   border-b text-center font-semibold border-gray-200 text-gray-800  "
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {allUsers.map((users) => (
                    <UserDataRow
                      key={users._id}
                      users={users}
                      refetch={refetch}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;