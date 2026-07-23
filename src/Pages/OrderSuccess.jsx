import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

function OrderSuccess() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-10 rounded-3xl shadow-xl text-center max-w-md">
        <FaCheckCircle className="text-green-500 text-7xl mx-auto mb-5" />

        <h1 className="text-4xl font-bold mb-4">Order Placed!</h1>

        <p className="text-gray-600 mb-8">
          Thank you for shopping with ShopSphere. Your order has been placed
          successfully.
        </p>

        <Link
          to="/shop"
          className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}

export default OrderSuccess;
