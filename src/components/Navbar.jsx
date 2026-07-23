// import { Link } from "react-router-dom";
// import { FaSearch, FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
// import { useContext } from "react";
// import { CartContext } from "../context/CartContext";
// import { WishlistContext } from "../context/WishlistContext";

// function Navbar() {
//   const { cart } = useContext(CartContext);
//   const { wishlist } = useContext(WishlistContext);
//   return (
//     <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//         {/* Logo */}
//         <Link
//           to="/"
//           className="text-3xl font-extrabold bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent"
//         >
//           ShopSphere
//         </Link>

//         {/* Search */}
//         <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 w-[380px]">
//           <FaSearch className="text-gray-500" />
//           <input
//             type="text"
//             placeholder="Search products..."
//             className="bg-transparent outline-none px-3 w-full"
//           />
//         </div>

//         {/* Menu */}
//         <div className="flex items-center gap-6">
//           <Link to="/" className="hover:text-indigo-600">
//             Home
//           </Link>

//           <Link to="/shop" className="hover:text-indigo-600">
//             Shop
//           </Link>

//           <Link to="/wishlist" className="relative hover:text-pink-500">
//             <FaHeart size={20} />

//             <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
//               {wishlist.length}
//             </span>
//           </Link>

//           <Link to="/cart" className="relative hover:text-indigo-600">
//             <FaShoppingCart size={20} />
//             <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
//               {cart.length}
//             </span>
//           </Link>

//           <Link to="/login">
//             <button className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition">
//               <FaUser />
//               Login
//             </button>
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";

function Navbar() {
  const { cart } = useContext(CartContext);
  const { wishlist } = useContext(WishlistContext);

  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const handleSearch = () => {
    if (search.trim() !== "") {
      navigate(`/shop?search=${encodeURIComponent(search)}`);
    } else {
      navigate("/shop");
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-extrabold bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent"
        >
          ShopSphere
        </Link>

        {/* Search */}
        <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 w-[380px]">
          <FaSearch
            className="text-gray-500 cursor-pointer"
            onClick={handleSearch}
          />

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
            className="bg-transparent outline-none px-3 w-full"
          />
        </div>

        {/* Menu */}
        <div className="flex items-center gap-6">
          <Link to="/" className="hover:text-indigo-600">
            Home
          </Link>

          <Link to="/shop" className="hover:text-indigo-600">
            Shop
          </Link>

          <Link to="/wishlist" className="relative hover:text-pink-500">
            <FaHeart size={20} />
            <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {wishlist.length}
            </span>
          </Link>

          <Link to="/cart" className="relative hover:text-indigo-600">
            <FaShoppingCart size={20} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {cart.length}
            </span>
          </Link>

          <Link to="/login">
            <button className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition">
              <FaUser />
              Login
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
