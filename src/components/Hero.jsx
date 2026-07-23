import { Link } from "react-router-dom";
function Hero() {
  return (
    <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white">
      <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2">
          <p className="bg-white/20 inline-block px-4 py-1 rounded-full text-sm mb-5">
            ✨ New Collection 2026
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Upgrade Your <br />
            <span className="text-yellow-300">Shopping Experience</span>
          </h1>

          <p className="mt-6 text-lg text-gray-100 max-w-lg">
            Discover premium fashion, gadgets and lifestyle essentials with
            exclusive deals and lightning-fast delivery.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              to="/shop"
              className="bg-white text-indigo-700 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
            >
              Shop Now
            </Link>

            <Link
              to="/shop"
              className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-indigo-700 transition"
            >
              Explore
            </Link>
          </div>
        </div>

        <div className="lg:w-1/2 flex justify-center mt-12 lg:mt-0">
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=700"
            alt="Shopping"
            className="rounded-3xl shadow-2xl w-[420px] hover:scale-105 transition duration-300"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
