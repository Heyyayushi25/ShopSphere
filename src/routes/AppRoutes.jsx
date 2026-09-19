// import { BrowserRouter, Routes, Route } from "react-router-dom";

// // Admin
// import AdminLayout from "../admin/AdminLayout";
// import AdminDashboard from "../admin/AdminDashboard";
// import AdminProducts from "../admin/AdminProducts";
// import Orders from "../admin/Orders";
// import Customers from "../admin/Customers";
// import AddProduct from "../admin/AddProduct";

// // User Pages
// import Home from "../pages/Home";
// import Shop from "../pages/Shop";
// import ProductDetails from "../pages/ProductDetails";
// import Cart from "../pages/Cart";
// import Wishlist from "../pages/Wishlist";
// import Login from "../pages/Login";
// import Signup from "../pages/Signup";
// import Profile from "../pages/Profile";
// import Checkout from "../pages/Checkout";
// import OrderSuccess from "../pages/OrderSuccess";
// import NotFound from "../pages/NotFound";

// function AppRoutes() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* User Routes */}
//         <Route path="/" element={<Home />} />
//         <Route path="/shop" element={<Shop />} />
//         <Route path="/product/:id" element={<ProductDetails />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/wishlist" element={<Wishlist />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/checkout" element={<Checkout />} />
//         <Route path="/success" element={<OrderSuccess />} />

//         {/* Admin Routes */}
//         <Route path="/admin" element={<AdminLayout />}>
//           <Route index element={<AdminDashboard />} />
//           <Route path="products" element={<AdminProducts />} />
//           <Route path="orders" element={<Orders />} />
//           <Route path="customers" element={<Customers />} />
//           <Route path="add-product" element={<AddProduct />} />
//         </Route>

//         {/* 404 */}
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default AppRoutes;
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// // Admin
// import AdminLayout from "../admin/AdminLayout";
// import AdminDashboard from "../admin/AdminDashboard";
// import AdminProducts from "../admin/AdminProducts";
// import Orders from "../admin/Orders";
// import Customers from "../admin/Customers";
// import AddProduct from "../admin/AddProduct";

// // User Pages
// import Home from "../pages/Home";
// import Shop from "../pages/Shop";
// import ProductDetails from "../pages/ProductDetails";
// import Cart from "../pages/Cart";
// import Wishlist from "../pages/Wishlist";
// import Login from "../pages/Login";
// import Signup from "../pages/Signup";
// import Profile from "../pages/Profile";
// import Checkout from "../pages/Checkout";
// import OrderSuccess from "../pages/OrderSuccess";
// import NotFound from "../pages/NotFound";
// import CategoryPage from "../pages/CategoryPage"; // ✅ NEW

// function AppRoutes() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* User Routes */}
//         <Route path="/" element={<Home />} />
//         <Route path="/shop" element={<Shop />} />
//         <Route path="/category/:category" element={<CategoryPage />} />{" "}
//         {/* ✅ NEW */}
//         <Route path="/product/:id" element={<ProductDetails />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/wishlist" element={<Wishlist />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/checkout" element={<Checkout />} />
//         <Route path="/success" element={<OrderSuccess />} />
//         {/* Admin Routes */}
//         <Route path="/admin" element={<AdminLayout />}>
//           <Route index element={<AdminDashboard />} />
//           <Route path="products" element={<AdminProducts />} />
//           <Route path="orders" element={<Orders />} />
//           <Route path="customers" element={<Customers />} />
//           <Route path="add-product" element={<AddProduct />} />
//         </Route>
//         {/* 404 */}
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default AppRoutes;

import { BrowserRouter, Routes, Route } from "react-router-dom";

// Admin
import AdminLayout from "../admin/AdminLayout";
import AdminDashboard from "../admin/AdminDashboard";
import AdminProducts from "../admin/AdminProducts";
import Orders from "../admin/Orders";
import Customers from "../admin/Customers";
import AddProduct from "../admin/AddProduct";

// User Pages
import Home from "../Pages/Home";
import Shop from "../Pages/Shop";
import ProductDetails from "../Pages/ProductDetails";
import Cart from "../Pages/Cart";
import Wishlist from "../Pages/Wishlist";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Profile from "../Pages/Profile";
import Checkout from "../Pages/Checkout";
import OrderSuccess from "../Pages/OrderSuccess";
import NotFound from "../Pages/NotFound";
import CategoryPage from "../Pages/CategoryPage";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<OrderSuccess />} />

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="orders" element={<Orders />} />
          <Route path="customers" element={<Customers />} />
          <Route path="add-product" element={<AddProduct />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
