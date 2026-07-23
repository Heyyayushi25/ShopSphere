// import { FaSearch, FaFilter, FaHeart, FaShoppingCart } from "react-icons/fa";

// function Shop() {
//   const products = [
//     {
//       id: 1,
//       name: "Premium Headphones",
//       category: "Electronics",
//       price: "₹4999",
//       rating: "4.8",
//       image:
//         "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
//     },
//     {
//       id: 2,
//       name: "Smart Watch",
//       category: "Accessories",
//       price: "₹2999",
//       rating: "4.7",
//       image:
//         "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
//     },
//     {
//       id: 3,
//       name: "Running Shoes",
//       category: "Fashion",
//       price: "₹3999",
//       rating: "4.9",
//       image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
//     },
//     {
//       id: 4,
//       name: "Gaming Mouse",
//       category: "Gaming",
//       price: "₹1999",
//       rating: "4.6",
//       image:
//         "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500",
//     },
//   ];

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       {/* Header */}
//       <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
//         <div className="max-w-7xl mx-auto px-6">
//           <h1 className="text-5xl font-bold">Explore Products</h1>

//           <p className="mt-4 text-lg">
//             Find premium products at the best prices.
//           </p>
//         </div>
//       </section>

//       <div className="max-w-7xl mx-auto px-6 py-12">
//         {/* Search + Filter */}
//         <div className="flex flex-col md:flex-row justify-between gap-5 mb-10">
//           <div className="flex items-center bg-white rounded-xl px-5 py-3 shadow w-full md:w-[400px]">
//             <FaSearch className="text-gray-500" />
//             <input
//               placeholder="Search products..."
//               className="outline-none ml-3 w-full"
//             />
//           </div>

//           <button className="flex items-center gap-2 bg-white shadow px-6 py-3 rounded-xl">
//             <FaFilter />
//             Filters
//           </button>
//         </div>

//         {/* Products */}

//         <div className="grid md:grid-cols-4 gap-8">
//           {products.map((product) => (
//             <div
//               key={product.id}
//               className="bg-white rounded-3xl shadow-lg overflow-hidden hover:-translate-y-2 transition"
//             >
//               <div className="relative">
//                 <img src={product.image} className="h-60 w-full object-cover" />

//                 <button className="absolute top-4 right-4 bg-white p-3 rounded-full shadow">
//                   <FaHeart className="text-red-500" />
//                 </button>
//               </div>

//               <div className="p-5">
//                 <p className="text-sm text-gray-500">{product.category}</p>

//                 <h2 className="text-xl font-bold mt-2">{product.name}</h2>

//                 <div className="flex justify-between mt-3">
//                   <span className="text-indigo-600 font-bold">
//                     {product.price}
//                   </span>

//                   <span> {product.rating}</span>
//                 </div>

//                 <button className="mt-5 w-full bg-indigo-600 text-white py-3 rounded-xl flex justify-center items-center gap-2">
//                   <FaShoppingCart />
//                   Add To Cart
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Shop;
// import ProductCard from "../components/ProductCard";

// function Shop() {
//   const products = [
//     {
//       id: 1,
//       name: "Wireless Headphones",
//       price: "₹1999",
//       image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
//     },
//     {
//       id: 2,
//       name: "Smart Watch",
//       price: "₹2499",
//       image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
//     },
//     {
//       id: 3,
//       name: "Gaming Mouse",
//       price: "₹999",
//       image: "https://images.unsplash.com/photo-1527814050087-3793815479db",
//     },
//   ];

//   return (
//     <div className="p-8">
//       <h1 className="text-3xl font-bold mb-6">ShopSphere Products</h1>

//       <div className="grid md:grid-cols-3 gap-6">
//         {products.map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Shop;
// import { useState } from "react";
// import ProductCard from "../components/ProductCard";

// function Shop() {
//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState("All");

//   const products = [
//     {
//       id: 1,
//       name: "Wireless Headphones",
//       price: "₹1999",
//       image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
//       category: "Electronics",
//     },
//     {
//       id: 2,
//       name: "Smart Watch",
//       price: "₹2499",
//       image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
//       category: "Wearables",
//     },
//     {
//       id: 3,
//       name: "Gaming Mouse",
//       price: "₹999",
//       image: "https://images.unsplash.com/photo-1527814050087-3793815479db",
//       category: "Accessories",
//     },
//   ];

//   const filteredProducts = products.filter((product) => {
//     const matchesSearch = product.name
//       .toLowerCase()
//       .includes(search.toLowerCase());

//     const matchesCategory = category === "All" || product.category === category;

//     return matchesSearch && matchesCategory;
//   });
//   console.log(search);
//   console.log(filteredProducts);

//   return (
//     <div className="p-8">
//       <h1 className="text-3xl font-bold mb-6">ShopSphere Products</h1>

//       <input
//         type="text"
//         placeholder="Search Products..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         className="border w-full md:w-96 p-3 rounded-lg mb-8"
//       />
//       <div className="flex gap-3 mb-8 flex-wrap">
//         {["All", "Electronics", "Wearables", "Accessories"].map((cat) => (
//           <button
//             key={cat}
//             onClick={() => setCategory(cat)}
//             className={`px-4 py-2 rounded-lg border ${
//               category === cat
//                 ? "bg-blue-600 text-white"
//                 : "bg-white text-black"
//             }`}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       <div className="grid md:grid-cols-3 gap-6">
//         {filteredProducts.map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Shop;

// import { useEffect, useState } from "react";
// import { useSearchParams } from "react-router-dom";
// import ProductCard from "../components/ProductCard";
// import { getProducts } from "../services/productService";

// function Shop() {
//   const [products, setProducts] = useState([]);
//   const [search, setSearch] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   const [searchParams] = useSearchParams();

//   const selectedCategory = searchParams.get("category");
//   const offer = searchParams.get("offer");

//   useEffect(() => {
//     async function fetchProducts() {
//       try {
//         const data = await getProducts();
//         setProducts(data);
//       } catch (err) {
//         setError("Failed to load products.");
//         console.log(err);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchProducts();
//   }, []);

//   const filteredProducts = products.filter((product) => {
//     const matchesSearch = product.title
//       .toLowerCase()
//       .includes(search.toLowerCase());

//     const matchesOffer = offer ? product.discountPercentage >= 10 : true;

//     const matchesCategory = selectedCategory
//       ? selectedCategory === "electronics"
//         ? ["laptops", "tablets", "mobile-accessories"].includes(
//             product.category,
//           )
//         : selectedCategory === "fashion"
//           ? ["mens-shirts", "womens-dresses", "womens-jewellery"].includes(
//               product.category,
//             )
//           : selectedCategory === "smartphones"
//             ? product.category === "smartphones"
//             : selectedCategory === "furniture"
//               ? product.category === "furniture"
//               : false
//       : true;

//     return matchesSearch && matchesCategory && matchesOffer;
//   });

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-[60vh]">
//         <h1 className="text-3xl font-bold">Loading Products...</h1>
//       </div>
//     );
//   }

//   if (error) {
//     return <div className="text-red-600 text-center mt-10">{error}</div>;
//   }

//   return (
//     <div className="max-w-7xl mx-auto px-6 py-10">
//       <h1 className="text-4xl font-bold mb-8">
//         {offer ? " Mega Sale Products" : "Shop Our Products"}
//       </h1>

//       <input
//         type="text"
//         placeholder="Search products..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         className="border w-full md:w-96 p-3 rounded-xl mb-8"
//       />

//       <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//         {filteredProducts.length > 0 ? (
//           filteredProducts.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))
//         ) : (
//           <h2 className="text-2xl font-bold">No Products Found</h2>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Shop;
// import { useEffect, useState } from "react";
// import { useSearchParams } from "react-router-dom";
// import ProductCard from "../components/ProductCard";
// import { getProducts } from "../services/productService";

// function Shop() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   const [searchParams] = useSearchParams();

//   const search = searchParams.get("search") || "";
//   const selectedCategory = searchParams.get("category");
//   const subCategory = searchParams.get("subcategory");
//   const offer = searchParams.get("offer");
//   console.log("SubCategory:", subCategory);

//   useEffect(() => {
//     async function fetchProducts() {
//       try {
//         const data = await getProducts();
//         setProducts(data);
//       } catch (err) {
//         console.log(err);
//         setError("Failed to load products.");
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchProducts()
//     const data = await getProducts();

// console.log(data.map((p) => p.category));

// setProducts(data);;
//   }, []);

//   const filteredProducts = products.filter((product) => {
//     const matchesSearch = product.title
//       .toLowerCase()
//       .includes(search.toLowerCase());

//     const matchesOffer = offer ? product.discountPercentage >= 10 : true;

//     const matchesSubCategory = subCategory
//       ? product.category === subCategory
//       : true;

//     let matchesCategory = true;

//     if (selectedCategory) {
//       switch (selectedCategory) {
//         case "electronics":
//           matchesCategory = [
//             "smartphones",
//             "laptops",
//             "tablets",
//             "mobile-accessories",
//           ].includes(product.category);
//           break;

//         case "fashion":
//           matchesCategory = [
//             "mens-shirts",
//             "mens-shoes",
//             "mens-watches",
//             "tops",
//             "womens-bags",
//             "womens-dresses",
//             "womens-jewellery",
//             "womens-shoes",
//             "womens-watches",
//             "sunglasses",
//           ].includes(product.category);
//           break;

//         case "smartphones":
//           matchesCategory = product.category === "smartphones";
//           break;

//         case "furniture":
//           matchesCategory = product.category === "furniture";
//           break;

//         default:
//           matchesCategory = true;
//       }
//     }

//     return (
//       matchesSearch && matchesOffer && matchesCategory && matchesSubCategory
//     );
//   });

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-[60vh]">
//         <h1 className="text-3xl font-bold">Loading Products...</h1>
//       </div>
//     );
//   }

//   if (error) {
//     return <div className="text-center text-red-600 mt-10">{error}</div>;
//   }

//   return (
//     <div className="max-w-7xl mx-auto px-6 py-10">
//       <h1 className="text-4xl font-bold mb-8">
//         {offer
//           ? "🔥 Mega Sale Products"
//           : subCategory
//             ? subCategory.replace("-", " ").toUpperCase()
//             : "Shop Our Products"}
//       </h1>

//       {search && (
//         <p className="mb-6 text-gray-600">
//           Search Results for: <b>{search}</b>
//         </p>
//       )}

//       <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//         {filteredProducts.length > 0 ? (
//           filteredProducts.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))
//         ) : (
//           <h2 className="text-2xl font-bold">No Products Found</h2>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Shop;
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../services/productService";

function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [searchParams] = useSearchParams();

  const search = searchParams.get("search") || "";
  const selectedCategory = searchParams.get("category");
  const subCategory = searchParams.get("subcategory");
  const offer = searchParams.get("offer");

  console.log("SubCategory:", subCategory);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getProducts();

        console.log("All Categories:");
        console.log(data.map((p) => p.category));

        setProducts(data);
      } catch (err) {
        console.log(err);
        setError("Failed to load products.");
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesOffer = offer ? product.discountPercentage >= 10 : true;

    const matchesSubCategory = subCategory
      ? product.category === subCategory
      : true;

    let matchesCategory = true;

    if (selectedCategory) {
      switch (selectedCategory) {
        case "electronics":
          matchesCategory = [
            "smartphones",
            "laptops",
            "tablets",
            "mobile-accessories",
          ].includes(product.category);
          break;

        case "fashion":
          matchesCategory = [
            "mens-shirts",
            "mens-shoes",
            "mens-watches",
            "tops",
            "womens-bags",
            "womens-dresses",
            "womens-jewellery",
            "womens-shoes",
            "womens-watches",
            "sunglasses",
          ].includes(product.category);
          break;

        case "smartphones":
          matchesCategory = product.category === "smartphones";
          break;

        case "furniture":
          matchesCategory = product.category === "furniture";
          break;

        default:
          matchesCategory = true;
      }
    }

    return (
      matchesSearch && matchesOffer && matchesCategory && matchesSubCategory
    );
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <h1 className="text-3xl font-bold">Loading Products...</h1>
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-600 mt-10">{error}</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-8">
        {offer
          ? "🔥 Mega Sale Products"
          : subCategory
            ? subCategory.replace(/-/g, " ").toUpperCase()
            : "Shop Our Products"}
      </h1>

      {search && (
        <p className="mb-6 text-gray-600">
          Search Results for: <b>{search}</b>
        </p>
      )}

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <h2 className="text-2xl font-bold">No Products Found</h2>
        )}
      </div>
    </div>
  );
}

export default Shop;
