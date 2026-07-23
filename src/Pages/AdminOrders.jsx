import { useContext } from "react";
import { OrderContext } from "../context/OrderContext";

function AdminOrders() {
  const { orders } = useContext(OrderContext);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Orders Dashboard</h1>

      {orders.length === 0 ? (
        <p>No Orders Found</p>
      ) : (
        orders.map((order, index) => (
          <div key={index} className="border rounded-lg p-5 mb-5 shadow">
            <h2 className="text-xl font-bold">Order #{index + 1}</h2>

            <p className="mt-2">Customer: {order.customer}</p>

            <h3 className="font-semibold mt-3">Products:</h3>

            {order.products.map((item, i) => (
              <p key={i}>
                {item.name} × {item.quantity}
              </p>
            ))}

            <p className="mt-3 font-bold">Total: ₹{order.total}</p>

            <p>
              Status:
              <span className="text-orange-500 ml-2">{order.status}</span>
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default AdminOrders;
