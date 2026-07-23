// import { useContext } from "react";
import { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";
import { CartContext } from "../context/CartContext";

function Wishlist() {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);
  const { addToCart } = useContext(CartContext);

  if (wishlist.length === 0) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-4">❤️ Wishlist</h1>
        <p className="text-gray-500 text-lg">Your wishlist is empty.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-8">❤️ My Wishlist</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {wishlist.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-56 object-cover"
            />

            <div className="p-5">
              <h2 className="text-xl font-bold">{item.title}</h2>

              <p className="text-indigo-600 text-xl font-semibold mt-2">
                ₹{item.price}
              </p>

              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => addToCart(item)}
                  className="flex-1 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
                >
                  Add To Cart
                </button>

                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="flex-1 border border-red-500 text-red-500 py-2 rounded-lg hover:bg-red-500 hover:text-white transition"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wishlist;
