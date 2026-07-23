// import { useContext } from "react";
// import { CartContext } from "../context/CartContext";

// function Cart() {
//   const { cart } = useContext(CartContext);

//   return (
//     <div className="p-8">
//       <h1 className="text-3xl font-bold mb-6">Your Cart 🛒</h1>

//       {cart.length === 0 ? (
//         <p className="text-gray-600">Your cart is empty</p>
//       ) : (
//         <div className="grid gap-5">
//           {cart.map((item, index) => (
//             <div
//               key={index}
//               className="flex items-center gap-5 border rounded-xl p-4 shadow"
//             >
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="w-24 h-24 object-cover rounded"
//               />

//               <div>
//                 <h2 className="text-xl font-semibold">{item.name}</h2>

//                 <p className="text-gray-600">{item.price}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Cart;
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } =
    useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-8">Shopping Cart 🛒</h1>

      {cart.length === 0 ? (
        <div className="text-center py-20">
          <h2 className="text-2xl text-gray-500">Your cart is empty</h2>
        </div>
      ) : (
        <>
          <div className="space-y-5">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row items-center justify-between bg-white rounded-2xl p-5 shadow-lg"
              >
                <div className="flex gap-5 items-center">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-28 h-28 rounded-xl object-cover"
                  />

                  <div>
                    <h2 className="font-bold text-xl">{item.title}</h2>

                    <p className="text-indigo-600 font-semibold">
                      ₹{item.price}
                    </p>

                    <div className="flex items-center gap-4 mt-4">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="border px-3 py-1 rounded"
                      >
                        -
                      </button>

                      <span className="font-bold">{item.quantity}</span>

                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="border px-3 py-1 rounded"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600 mt-4 md:mt-0"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="mt-10 text-3xl font-bold">Total: ₹{total}</div>

          <Link
            to="/checkout"
            className="inline-block mt-6 bg-green-600 text-white px-8 py-3 rounded-xl hover:bg-green-700 transition"
          >
            Proceed To Checkout
          </Link>
        </>
      )}
    </div>
  );
}

export default Cart;
