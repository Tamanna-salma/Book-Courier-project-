import { toast } from "react-toastify";
import { useState } from "react";

const OrderModal = ({ book, user, closeModal }) => {
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleOrder = () => {
    const orderInfo = {
      bookId: book._id,
      bookName: book.bookName,
      price: book.price,
      userName: user?.displayName,
      userEmail: user?.email,
      phone,
      address,
      status: "pending",
      paymentStatus: "unpaid",
      orderDate: new Date(),
    };

    fetch("http://localhost:3000/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Order placed successfully!");
        closeModal();
        console.log("New Order ID:", data.insertedId); 
      })
      .catch((err) => toast.error("Failed to place order: " + err.message));
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 flex justify-center items-center">
      <div className="bg-white p-6 rounded-xl w-96 shadow-xl">
        <h2 className="text-xl font-bold mb-4">Place Your Order</h2>

        <label className="block">Name</label>
        <input
          type="text"
          value={user?.displayName || ""}
          readOnly
          className="input input-bordered w-full mb-2"
        />

        <label className="block">Email</label>
        <input
          type="text"
          value={user?.email || ""}
          readOnly
          className="input input-bordered w-full mb-2"
        />

        <label className="block">Phone Number</label>
        <input
          type="text"
          className="input input-bordered w-full mb-2"
          onChange={(e) => setPhone(e.target.value)}
        />

        <label className="block">Address</label>
        <textarea
          className="textarea textarea-bordered w-full mb-4"
          onChange={(e) => setAddress(e.target.value)}
        />

        <div className="flex justify-end gap-3">
          <button className="btn" onClick={closeModal}>
            Cancel
          </button>
          <button className="btn bg-purple-700 text-white" onClick={handleOrder}>
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
