
import { useNavigate, useSearchParams } from "react-router";
import UseAxiosSecure from "../../../../components/Hooks/UseAxiosSecure";
import { useEffect } from "react";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const axiosSecure = UseAxiosSecure();
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionId) {
      axiosSecure
        .patch(`/payment-success?session_id=${sessionId}`)
        .then((res) => {
          console.log(res.data);
        });
    }
  }, [sessionId]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">

        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Payment Successful!
        </h2>
        <p className="text-gray-600 mb-4">
          Your book order has been successfully placed.
        </p>

        <button
          onClick={() => navigate("/dashboard/invoices")}
          className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
        >
          Go to Invoices
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
