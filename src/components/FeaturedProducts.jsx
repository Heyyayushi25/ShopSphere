// import { FaStar, FaShoppingCart } from "react-icons/fa";

// function FeaturedProducts() {
//   const products = [
//     {
//       id: 1,
//       name: "Wireless Headphones",
//       price: "$99",
//       rating: "4.8",
//       image:
//         "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
//     },
//     {
//       id: 2,
//       name: "Smart Watch",
//       price: "$149",
//       rating: "4.9",
//       image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500",
//     },
//     {
//       id: 3,
//       name: "Running Shoes",
//       price: "$120",
//       rating: "4.7",
//       image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
//     },
//     {
//       id: 4,
//       name: "Gaming Mouse",
//       price: "$59",
//       rating: "4.8",
//       image:
//         "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500",
//     },
//   ];

//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-6">
//         <h2 className="text-4xl font-bold text-center mb-12">
//           Featured Products
//         </h2>

//         <div className="grid md:grid-cols-4 gap-8">
//           {products.map((item) => (
//             <div
//               key={item.id}
//               className="bg-white rounded-3xl shadow-xl overflow-hidden hover:-translate-y-2 duration-300"
//             >
//               <img
//                 src={item.image}
//                 className="h-60 w-full object-cover"
//                 alt={item.name}
//               />

//               <div className="p-5">
//                 <h3 className="text-xl font-semibold">{item.name}</h3>

//                 <div className="flex justify-between mt-3">
//                   <span className="font-bold text-indigo-600">
//                     {item.price}
//                   </span>

//                   <span className="flex items-center gap-1 text-yellow-500">
//                     <FaStar />
//                     {item.rating}
//                   </span>
//                 </div>

//                 <button className="mt-5 w-full bg-indigo-600 text-white py-3 rounded-xl flex justify-center items-center gap-2 hover:bg-indigo-700">
//                   <FaShoppingCart />
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default FeaturedProducts;
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../context/CartContext";
import { getProducts } from "../services/productService";

function FeaturedProducts() {
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    async function fetchProducts() {
      const data = await getProducts();

      // Sirf first 4 products dikha rahe hain
      setProducts(data.slice(0, 4));
    }

    fetchProducts();
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Featured Products
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl shadow-xl overflow-hidden hover:-translate-y-2 duration-300 cursor-pointer"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="h-60 w-full object-cover"
                onClick={() => navigate(`/product/${item.id}`)}
              />

              <div className="p-5">
                <h3 className="text-xl font-semibold">{item.title}</h3>

                <div className="flex justify-between mt-3">
                  <span className="font-bold text-indigo-600">
                    ₹{item.price}
                  </span>

                  <span className="flex items-center gap-1 text-yellow-500">
                    <FaStar />
                    {item.rating}
                  </span>
                </div>

                <button
                  onClick={() => addToCart(item)}
                  className="mt-5 w-full bg-indigo-600 text-white py-3 rounded-xl flex justify-center items-center gap-2 hover:bg-indigo-700"
                >
                  <FaShoppingCart />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button
            onClick={() => navigate("/shop")}
            className="bg-black text-white px-8 py-3 rounded-xl hover:bg-gray-800"
          >
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
