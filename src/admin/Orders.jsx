import { useState } from "react";

function Orders() {
  const [orders, setOrders] = useState([
    {
      id: "#1001",
      customer: "Ayushi Srivastava",
      email: "ayushi@gmail.com",
      products: "Wireless Headphones",
      total: "₹2,999",
      status: "Pending",
    },
    {
      id: "#1002",
      customer: "Rahul Sharma",
      email: "rahul@gmail.com",
      products: "iPhone 15",
      total: "₹79,999",
      status: "Shipped",
    },
    {
      id: "#1003",
      customer: "Priya Singh",
      email: "priya@gmail.com",
      products: "Luxury Sofa",
      total: "₹24,999",
      status: "Delivered",
    },
  ]);

  const updateStatus = (id) => {
    setOrders(
      orders.map((order) => {
        if (order.id !== id) return order;

        let nextStatus = order.status;

        if (order.status === "Pending") nextStatus = "Shipped";
        else if (order.status === "Shipped") nextStatus = "Delivered";

        return {
          ...order,
          status: nextStatus,
        };
      }),
    );
  };

  const statusColor = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      case "Shipped":
        return "bg-blue-100 text-blue-700";
      case "Delivered":
        return "bg-green-100 text-green-700";
      default:
        return "";
    }
  };

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Orders</h1>

      <div className="bg-white rounded-2xl shadow-lg overflow-x-auto">
        <table className="w-full">
          <thead className="bg-black text-white">
            <tr>
              <th className="p-4">Order ID</th>
              <th className="p-4">Customer</th>
              <th className="p-4">Email</th>
              <th className="p-4">Products</th>
              <th className="p-4">Total</th>
              <th className="p-4">Status</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className="border-b text-center hover:bg-gray-50"
              >
                <td className="p-4 font-semibold">{order.id}</td>

                <td className="p-4">{order.customer}</td>

                <td className="p-4">{order.email}</td>

                <td className="p-4">{order.products}</td>

                <td className="p-4 font-semibold">{order.total}</td>

                <td className="p-4">
                  <span
                    className={`px-4 py-2 rounded-full text-sm font-semibold ${statusColor(
                      order.status,
                    )}`}
                  >
                    {order.status}
                  </span>
                </td>

                <td className="p-4">
                  {order.status !== "Delivered" ? (
                    <button
                      onClick={() => updateStatus(order.id)}
                      className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800"
                    >
                      Update
                    </button>
                  ) : (
                    <span className="text-green-600 font-semibold">
                      Completed
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Orders;
