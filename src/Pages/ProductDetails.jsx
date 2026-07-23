// function ProductDetails() {
//   return <h1>ProductDetails</h1>;
// }

// export default ProductDetails;
// import { useParams } from "react-router-dom";

// function ProductDetails() {
//   const { id } = useParams();

//   return (
//     <div className="p-10">
//       <h1 className="text-3xl font-bold">Product Details</h1>

//       <p className="mt-4 text-gray-600">Product ID : {id}</p>
//     </div>
//   );
// }

// export default ProductDetails;
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/productService";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    async function fetchProduct() {
      const data = await getProductById(id);
      setProduct(data);
      setLoading(false);
    }

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="h-[60vh] flex justify-center items-center">
        <h1 className="text-3xl font-bold">Loading Product...</h1>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Image */}

        <div>
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full rounded-2xl shadow-xl"
          />
        </div>

        {/* Details */}

        <div>
          <h1 className="text-4xl font-bold">{product.title}</h1>

          <p className="text-yellow-500 mt-3">⭐ {product.rating}</p>

          <h2 className="text-3xl font-bold text-indigo-600 mt-5">
            ₹{product.price}
          </h2>

          <p className="text-gray-600 mt-5">{product.description}</p>

          <div className="flex gap-4 mt-8">
            <button
              onClick={() => addToCart(product)}
              className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700"
            >
              Add To Cart
            </button>

            <button className="border px-6 py-3 rounded-xl">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
