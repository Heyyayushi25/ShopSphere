// function ProductCard({ product }) {
//   return (
//     <div className="border rounded-lg p-4 shadow hover:shadow-lg">
//       <img
//         src={product.image}
//         alt={product.name}
//         className="w-full h-48 object-cover"
//       />

//       <h2 className="text-xl font-semibold mt-3">{product.name}</h2>

//       <p className="text-gray-600">{product.price}</p>

//       <button className="bg-blue-600 text-white px-4 py-2 rounded mt-3">
//         Add To Cart
//       </button>
//     </div>
//   );
// }

// export default ProductCard;
// import { Link } from "react-router-dom";

// function ProductCard({ product }) {
//   return (
//     <div className="border rounded-lg p-4 shadow hover:shadow-lg">
//       <img
//         src={product.image}
//         alt={product.name}
//         className="w-full h-48 object-cover"
//       />

//       <h2 className="text-xl font-semibold mt-3">{product.name}</h2>

//       <p className="text-gray-600">{product.price}</p>

//       <div className="flex gap-3 mt-3">
//         <button className="bg-blue-600 text-white px-4 py-2 rounded">
//           Add To Cart
//         </button>

//         <Link
//           to={`/product/${product.id}`}
//           className="border px-4 py-2 rounded"
//         >
//           View Details
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default ProductCard;
import { useContext } from "react";

import { Link } from "react-router-dom";
import { FaHeart, FaStar } from "react-icons/fa";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 overflow-hidden group">
      <div className="relative">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-56 object-cover group-hover:scale-105 transition duration-300"
        />

        <button
          onClick={() => addToWishlist(product)}
          className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:bg-pink-500 hover:text-white transition"
        >
          <FaHeart />
        </button>
      </div>

      <div className="p-5">
        <h2 className="text-lg font-bold line-clamp-1">{product.title}</h2>

        <p className="text-gray-500 text-sm mt-2 line-clamp-2">
          {product.description}
        </p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-2xl font-bold text-indigo-600">
            ₹{product.price}
          </span>

          <span className="flex items-center gap-1 text-yellow-500 font-semibold">
            <FaStar />
            {product.rating}
          </span>
        </div>

        <button
          onClick={() => {
            addToCart(product);
            alert("Product added to cart 🛒");
          }}
          className="w-full mt-5 bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700 transition"
        >
          Add To Cart
        </button>

        <Link
          to={`/product/${product.id}`}
          className="block text-center mt-3 border border-indigo-600 text-indigo-600 py-3 rounded-xl hover:bg-indigo-600 hover:text-white transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
