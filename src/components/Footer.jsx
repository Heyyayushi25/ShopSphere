import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-950 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Logo */}
          <div>
            <h2 className="text-3xl font-extrabold text-indigo-400">
              ShopSphere
            </h2>

            <p className="text-gray-400 mt-4 leading-7">
              Your one-stop destination for Electronics, Fashion, Mobiles and
              Furniture with premium quality and amazing deals.
            </p>

            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-indigo-600 duration-300"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-pink-600 duration-300"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-sky-500 duration-300"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-blue-700 duration-300"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-5">Quick Links</h3>

            <div className="flex flex-col gap-3 text-gray-400">
              <Link to="/" className="hover:text-white">
                Home
              </Link>

              <Link to="/shop" className="hover:text-white">
                Shop
              </Link>

              <Link to="/cart" className="hover:text-white">
                Cart
              </Link>

              <Link to="/wishlist" className="hover:text-white">
                Wishlist
              </Link>

              <Link to="/login" className="hover:text-white">
                Login
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xl font-bold mb-5">Categories</h3>

            <div className="flex flex-col gap-3 text-gray-400">
              <Link to="/category/electronics" className="hover:text-white">
                Electronics
              </Link>

              <Link to="/category/fashion" className="hover:text-white">
                Fashion
              </Link>

              <Link to="/category/smartphones" className="hover:text-white">
                Mobiles
              </Link>

              <Link to="/category/furniture" className="hover:text-white">
                Furniture
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-5">Contact</h3>

            <div className="space-y-4 text-gray-400">
              <p className="flex items-center gap-3">
                <FaMapMarkerAlt />
                Lucknow, India
              </p>

              <p className="flex items-center gap-3">
                <FaPhoneAlt />
                +91 98765 43210
              </p>

              <p className="flex items-center gap-3">
                <FaEnvelope />
                support@shopsphere.com
              </p>
            </div>

            <div className="mt-6">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 rounded-lg text-black outline-none"
              />

              <button className="mt-3 w-full bg-indigo-600 py-3 rounded-lg hover:bg-indigo-700 duration-300 font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <hr className="border-gray-800 my-10" />

        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© 2026 ShopSphere. All Rights Reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="#" className="hover:text-white">
              Privacy Policy
            </Link>

            <Link to="#" className="hover:text-white">
              Terms & Conditions
            </Link>

            <Link to="#" className="hover:text-white">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
