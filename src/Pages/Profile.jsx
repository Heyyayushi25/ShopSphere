import { FaUserCircle, FaShoppingBag, FaHeart } from "react-icons/fa";

function Profile() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <div className="bg-white shadow-xl rounded-2xl p-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <FaUserCircle className="text-8xl text-indigo-600" />

          <div>
            <h1 className="text-4xl font-bold">Ayushi Srivastava</h1>

            <p className="text-gray-600 mt-2">ayushi@email.com</p>

            <p className="text-gray-600">+91 9876543210</p>

            <p className="text-gray-600">Lucknow, India</p>

            <button className="mt-5 bg-indigo-600 text-white px-5 py-2 rounded-xl">
              Edit Profile
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="bg-indigo-50 rounded-xl p-6 text-center">
            <FaShoppingBag className="mx-auto text-3xl text-indigo-600" />
            <h2 className="mt-3 font-bold text-xl">12</h2>
            <p>Total Orders</p>
          </div>

          <div className="bg-pink-50 rounded-xl p-6 text-center">
            <FaHeart className="mx-auto text-3xl text-pink-600" />
            <h2 className="mt-3 font-bold text-xl">5</h2>
            <p>Wishlist Items</p>
          </div>

          <div className="bg-green-50 rounded-xl p-6 text-center">
            <h2 className="text-4xl">🛒</h2>
            <h2 className="mt-3 font-bold text-xl">3</h2>
            <p>Cart Items</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
