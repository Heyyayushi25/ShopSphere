// import { useContext } from "react";
// import { CartContext } from "../context/CartContext";
// import { Link } from "react-router-dom";

// function Checkout() {
//   const { cart } = useContext(CartContext);

//   const total = cart.reduce(
//     (sum, item) =>
//       sum + Number(item.price.toString().replace("₹", "")) * item.quantity,
//     0,
//   );

//   return (
//     <div className="max-w-7xl mx-auto px-6 py-10">
//       <h1 className="text-4xl font-bold mb-8">Checkout</h1>

//       <div className="grid lg:grid-cols-2 gap-10">
//         {/* Shipping */}

//         <div className="bg-white shadow-lg rounded-2xl p-6">
//           <h2 className="text-2xl font-bold mb-5">Shipping Details</h2>

//           <div className="space-y-4">
//             <input
//               type="text"
//               placeholder="Full Name"
//               className="w-full border p-3 rounded-lg"
//             />

//             <input
//               type="email"
//               placeholder="Email"
//               className="w-full border p-3 rounded-lg"
//             />

//             <input
//               type="text"
//               placeholder="Phone Number"
//               className="w-full border p-3 rounded-lg"
//             />

//             <textarea
//               placeholder="Address"
//               rows="4"
//               className="w-full border p-3 rounded-lg"
//             ></textarea>
//           </div>
//         </div>

//         {/* Order Summary */}

//         <div className="bg-white shadow-lg rounded-2xl p-6">
//           <h2 className="text-2xl font-bold mb-5">Order Summary</h2>

//           {cart.map((item) => (
//             <div key={item.id} className="flex justify-between mb-4">
//               <span>
//                 {item.name} × {item.quantity}
//               </span>

//               <span>
//                 ₹
//                 {Number(item.price.toString().replace("₹", "")) * item.quantity}
//               </span>
//             </div>
//           ))}

//           <hr className="my-5" />

//           <div className="flex justify-between text-2xl font-bold">
//             <span>Total</span>
//             <span>₹{total}</span>
//           </div>
//           <Link
//             to="/success"
//             className="block text-center w-full mt-8 bg-green-600 text-white py-3 rounded-xl hover:bg-green-700"
//           >
//             Place Order
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Checkout;
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const { cart, setCart } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const { placeOrder } = useContext(OrderContext);

  const placeOrderHandler = () => {
    const newOrder = {
      id: Date.now(),
      items: cart,
      total: total,
      date: new Date().toLocaleString(),
    };

    placeOrder(newOrder);

    setCart([]);

    navigate("/success");
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-8">Checkout 🛍️</h1>

      <div className="bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-2xl font-bold mb-5">Order Summary</h2>

        {cart.map((item) => (
          <div key={item.id} className="flex justify-between border-b py-3">
            <span>
              {item.title} × {item.quantity}
            </span>

            <span>₹{item.price * item.quantity}</span>
          </div>
        ))}

        <div className="text-2xl font-bold mt-6">Total: ₹{total}</div>

        <button
          onClick={placeOrderHandler}
          className="mt-6 bg-green-600 text-white px-8 py-3 rounded-xl hover:bg-green-700"
        >
          Place Order
        </button>
      </div>
    </div>
  );
}

export default Checkout;
