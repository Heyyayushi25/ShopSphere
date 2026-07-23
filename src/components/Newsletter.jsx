function Newsletter() {
  return (
    <section className="py-24 bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-10 md:p-16 text-center border border-white/20">
          <span className="inline-block bg-yellow-400 text-black px-5 py-2 rounded-full font-bold text-sm mb-6">
            🎁 LIMITED TIME OFFER
          </span>

          <h2 className="text-5xl font-extrabold text-white leading-tight">
            Get <span className="text-yellow-300">20% OFF</span> <br />
            On Your First Order
          </h2>

          <p className="mt-6 text-lg text-gray-200 max-w-2xl mx-auto">
            Subscribe to ShopSphere and be the first to know about exclusive
            deals, new arrivals, flash sales and member-only discounts.
          </p>

          <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="📧 Enter your email address"
              className="w-full md:w-[420px] px-6 py-4 rounded-2xl outline-none text-black shadow-lg"
            />

            <button className="bg-yellow-400 text-black px-10 py-4 rounded-2xl font-bold hover:scale-105 hover:bg-yellow-300 duration-300 shadow-lg">
              Subscribe Now 🚀
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mt-10 text-white font-medium">
            <span>✅ Exclusive Offers</span>
            <span>🚚 Free Shipping</span>
            <span>🔥 Flash Sales</span>
            <span>❌ No Spam</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
