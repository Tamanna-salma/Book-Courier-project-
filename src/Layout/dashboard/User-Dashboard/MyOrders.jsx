import React from 'react'
import UseAuth from '../../../components/Hooks/UseAuth';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { FaMagnifyingGlass, FaTrashCan } from 'react-icons/fa6';
import { FiEdit } from 'react-icons/fi';
import UseAxiosSecure from '../../../components/Hooks/UseAxiosSecure';


const MyOrders = () => {
    const { user } = UseAuth();
    const axiosSecure = UseAxiosSecure();
    const { data: orders = [],refetch} = useQuery({
        queryKey: ['myorders', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/orders?email=${user.email}`);
            return res.data;
        }
    })
//delate
     const handleParcelDelete = id => {
        console.log(id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/orders/${id}`)
                    .then(res => {
                        console.log(res.data);

                        if (res.data.deletedCount) {
                            // refresh the data in the ui
                            refetch();

                            Swal.fire({
                                title: "Deleted!",
                                text: "Your orders request has been deleted.",
                                icon: "success"
                            });
                        }
                   })
            }
        })
    }

    const handlePayment = async (order) => {
        const paymentInfo = {
            cost: order.cost,
            parcelId:order._id, 
            senderEmail: order.senderEmail,
            parcelName: order.parcelName,
        }
        const res = await axiosSecure.post('/payment-checkout-session', paymentInfo);

        console.log(res.data.url);
        window.location.assign(res.data.url);
    };

    return (
         <div>
            <h2 className='px-4 '>All of my parcels : {orders.length}</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>BookName</th>
                            <th>Cost</th>
                            <th>Payment</th>
                            <th>Delivery Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
            {
                orders.map((order, index) => <tr key={order._id}>
                    <th>{index + 1}</th>
                    <td>{order.BookName}</td>
                    <td>{order.cost}</td>
                    <td>
              {
                 order.paymentstatus === 'paid' ?
                      <span className='text-green-400'>Paid</span>
                      :
                //       <Link to={`/dashboard/payment/${parcel._id}`}>
                //       <button onClick={() => handlePayment(parcel)} className="btn btn-sm btn-primary text-black">Pay</button>
                //       </Link>
                 <button onClick={() => handlePayment(order)} className="btn btn-sm btn-primary text-black">Pay</button>


                          }
                     
                      </td>
                      <td>{order.deliveryStatus}</td>
                      <td>
                          <button className='btn btn-square hover:bg-primary'>
                              <FaMagnifyingGlass />
                          </button>
                          <button className='btn btn-square hover:bg-primary mx-2'>
                              <FiEdit></FiEdit>
                          </button>
                          <button
                                        onClick={() => handleParcelDelete(order._id)}
                                        className='btn btn-square hover:bg-primary'>
                                        <FaTrashCan />
                                    </button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;