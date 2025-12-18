
import React from "react";
import UseAuth from "../../../components/Hooks/UseAuth";
import UseAxiosSecure from "../../../components/Hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../Pages/Loading";


const Orders = () => {
  const { user } = UseAuth();
  const axiosSecure = UseAxiosSecure();
  const {
    data: orderPayments = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["orderPayments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/orders/${user?.email}/payments`);
      return res.data;
    },
  });

  if (isLoading) return <Loading />;
  return (
    <div>
      <h2 className="text-center text-xl  md:text-4xl font-bold text-purple-500">
        My All Books
      </h2>
      <div className=" sm:px-8  px-4">
        <div className="pb-8 pt-2">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr className="bg-gray-100">
                    <th
                      scope="col"
                      className="px-5 py-3  text-gray-800  font-semibold   text-center"
                    >
                      Image
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 text-nowrap   text-gray-800  font-semibold   text-center"
                    >
                      Book Name
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 text-nowrap  text-gray-800  font-semibold  text-center"
                    >
                      Author Name
                    </th>

                    <th
                      scope="col"
                      className="px-5 py-3 text-nowrap   text-gray-800  font-semibold  text-center"
                    >
                      create date
                    </th>

                    <th
                      scope="col"
                      className="px-5 py-3  text-gray-800  font-semibold   text-center"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3  text-nowrap  text-gray-800  font-semibold  text-center"
                    >
                      Payment Status
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 text-nowrap  text-gray-800  font-semibold  text-center"
                    >
                      Delivery Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {orderPayments?.map((orderPayment) => (
                    <OrderTable
                      key={orderPayment._id}
                      orderPayment={orderPayment}
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

export default Orders;
