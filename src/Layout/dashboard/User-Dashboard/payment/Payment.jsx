import React from 'react';
import { useParams } from 'react-router';
import UseAxiosSecure from '../../../../components/Hooks/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const Payment = () => {
    const {ordersId } = useParams();
    const axiosSecure = UseAxiosSecure();

    const { isLoading, data: order } = useQuery({
        queryKey: ['orders', ordersId],
        queryFn: async () => {
            const res = await axiosSecure.get(`/orders/${ordersId}`);
            return res.data;
        }
    })

    const handlePayment = async() => {
   const paymentInfo = {
      price: order.price,
      orderId: order._id,
      userEmail: order.userEmail,
      bookName: order.bookName
    };

        const res = await axiosSecure.post('/create-checkout-session', paymentInfo);

        console.log(res.data);
        
        window.location.href = res.data.url;
    }

    if (isLoading) {
        return <div>
            <span className="loading loading-infinity loading-xl"></span>
        </div>
    }

    return (
        <div>
            <h2>Please Pay {order?.price}for : {order?. bookName} </h2>
            <button onClick={handlePayment} className='btn bg-green-600 text-white'>Pay</button>
        </div>
    );
};

export default Payment;