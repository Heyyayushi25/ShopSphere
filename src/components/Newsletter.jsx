import { useState } from "react";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setMessage("Please enter your email address.");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      setMessage("Please enter a valid email address.");
      return;
    }

    setMessage("🎉 Successfully subscribed! Welcome to ShopSphere.");
    setEmail("");
  };

  return (
    <section className="px-6 py-16">
      <div className="max-w-6xl mx-auto rounded-3xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 p-8 md:p-12 text-white shadow-xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Stay Updated with ShopSphere
          </h2>

          <p className="mt-3 text-white/80">
            Get the latest arrivals, flash sales and member-only discounts.
          </p>
        </div>

        <form
          onSubmit={handleSubscribe}
          className="flex flex-col md:flex-row gap-4 max-w-3xl mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setMessage("");
            }}
            placeholder="Enter your email address"
            className="flex-1 px-5 py-4 rounded-2xl text-gray-900 outline-none"
          />

          <button
            type="submit"
            className="px-8 py-4 rounded-2xl bg-yellow-400 text-black font-bold hover:bg-yellow-300 transition-all duration-300"
          >
            Subscribe Now 🚀
          </button>
        </form>

        {message && <p className="text-center mt-5 font-semibold">{message}</p>}

        <div className="flex flex-wrap justify-center gap-8 mt-10 text-sm md:text-base font-semibold">
          <span>✅ Exclusive Offers</span>
          <span>🚚 Free Shipping</span>
          <span>🔥 Flash Sales</span>
          <span>❌ No Spam</span>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
