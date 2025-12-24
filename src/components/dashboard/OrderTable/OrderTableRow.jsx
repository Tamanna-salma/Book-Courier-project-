import Swal from "sweetalert2";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";

const OrderTableRow = ({ order, refetch }) => {
  const axiosSecure = UseAxiosSecure();
  
  const {
    _id,
    bookName, 
    authorName,
    userName,
    userEmail,
    price,
    status,
    paymentStatus,
    orderDate, 
    quantity = 1,
  } = order;

  // Handle Cancel Order
  const handleCancelled = async () => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to cancel this order?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, cancel it!",
    });

    if (!confirm.isConfirmed) return;

    try {
      const res = await axiosSecure.patch(`/order-cancelled/${_id}`);
      if (res.data.modifiedCount > 0) {
        Swal.fire("Cancelled!", "Order has been cancelled.", "success");
        refetch();
      }
    } catch (error) {
      Swal.fire("Error!", "Failed to cancel order.", "error");
    }
  };

  // Handle Stripe Payment
  const handlePayment = async () => {
    const paymentInfo = {
      name: bookName,
      price: price,
      customerEmail: userEmail,
      _id: _id,
    };
    try {
      const res = await axiosSecure.post(`/create-checkout-session`, paymentInfo);
      window.location.href = res.data.url;
    } catch (error) {
      Swal.fire("Error!", "Payment initialization failed.", "error");
    }
  };

  return (
    <tr className="bg-white border-b hover:bg-purple-50 transition">
      <td className="py-3 px-4 text-center text-sm">{userName}</td>
      <td className="py-3 px-4 text-center text-sm font-medium">{bookName}</td>
      <td className="py-3 px-4 text-center text-sm">{authorName || "N/A"}</td>
      <td className="py-3 px-4 text-center text-sm">{userEmail}</td>
      
      {/* Payment Status */}
      <td className="py-3 px-4 text-center text-sm">
        <span className={`px-3 py-1 rounded-full font-bold ${paymentStatus === 'paid' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
          {paymentStatus}
        </span>
      </td>

      {/* Delivery Status */}
      <td className="py-3 px-4 text-center text-sm">
        <span className={`px-3 py-1 rounded-full font-bold ${status === 'pending' ? 'bg-yellow-100 text-yellow-600' : status === 'cancelled' ? 'bg-gray-100 text-gray-600' : 'bg-green-100 text-green-600'}`}>
          {status}
        </span>
      </td>

      <td className="py-3 px-4 text-center text-sm font-bold text-purple-700">${price}</td>
      <td className="py-3 px-4 text-center text-sm">{quantity}</td>
      <td className="py-3 px-4 text-center text-sm text-nowrap">
        {orderDate ? new Date(orderDate).toLocaleDateString() : "N/A"}
      </td>

      {/* Action Buttons with Requirements Logic */}
      <td className="py-3 px-4 text-center text-sm space-x-2">
        {/* Requirement: Pay button shows if pending and unpaid */}
        {status === "pending" && paymentStatus === "unpaid" && (
          <button
            onClick={handlePayment}
            className="bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded shadow"
          >
            Pay Now
          </button>
        )}

        {/* Requirement: Cancel button shows ONLY if status is pending */}
        {status === "pending" && (
          <button
            onClick={handleCancelled}
            className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded shadow"
          >
            Cancel
          </button>
        )}

        {/* If status is cancelled or paid, no buttons will show based on above conditions */}
      </td>
    </tr>
  );
};

export default OrderTableRow;