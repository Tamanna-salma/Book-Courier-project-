import React from "react";

const InvoicesTable = ({ order }) => {
  const {
    bookName,
    userEmail, 
    transactionId,
    userName,
    price,
    paymentStatus, 
    orderDate,
  } = order;

  return (
    <tr className="bg-white border-b hover:bg-purple-50 transition text-gray-700">
      <td className="py-3 px-4 text-center text-sm font-medium">
        {bookName}
      </td>

      <td className="py-3 px-4 text-center text-sm">
        {userName}
      </td>

      <td className="py-3 px-4 text-center text-sm">
        {userEmail}
      </td>

      {/* Transaction ID/Payment ID */}
      <td className="py-3 px-4 text-center text-sm font-mono text-purple-600">
        {transactionId || "N/A"}
      </td>

      <td className="py-3 px-4 text-center text-sm">
        <span className="bg-green-100 text-green-600 py-1 px-3 rounded-full font-bold">
          {paymentStatus}
        </span>
      </td>

      <td className="py-3 px-4 text-center text-sm font-bold">
        ${price}
      </td>

      <td className="py-3 px-4 text-center text-sm text-nowrap">
        {orderDate ? new Date(orderDate).toLocaleDateString() : "N/A"}
      </td>
    </tr>
  );
};

export default InvoicesTable;