// function OfferBanner() {
//   return (
//     <section className="py-20 bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 text-white">
//       <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
//         <div>
//           <h2 className="text-5xl font-bold">Mega Sale 🔥</h2>

//           <p className="mt-4 text-lg">
//             Up to <span className="font-bold text-yellow-300">70% OFF</span> on
//             Electronics, Fashion & Accessories.
//           </p>
//         </div>

//         <button className="mt-8 md:mt-0 bg-white text-indigo-700 px-8 py-4 rounded-xl font-bold hover:scale-105 transition">
//           Grab Deal
//         </button>
//       </div>
//     </section>
//   );
// }

// export default OfferBanner;
// import { useNavigate } from "react-router-dom";

// function OfferBanner() {
//   const navigate = useNavigate();

//   const handleGrabDeal = () => {
//     navigate("/shop?offer=true");
//   };

//   return (
//     <section className="py-20 bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 text-white">
//       <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
//         <div>
//           <h2 className="text-5xl font-bold">Mega Sale 🔥</h2>

//           <p className="mt-4 text-lg">
//             Up to <span className="font-bold text-yellow-300">70% OFF</span> on
//             Electronics, Fashion & Accessories.
//           </p>
//         </div>

//         <button
//           onClick={handleGrabDeal}
//           className="mt-8 md:mt-0 bg-white text-indigo-700 px-8 py-4 rounded-xl font-bold hover:scale-105 transition"
//         >
//           Grab Deal
//         </button>
//       </div>
//     </section>
//   );
// }

// export default OfferBanner;

import { useNavigate } from "react-router-dom";

function OfferBanner() {
  const navigate = useNavigate();

  const handleGrabDeal = () => {
    navigate("/shop?offer=true");
  };

  return (
    <section className="py-20 bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 text-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div>
          <h2 className="text-5xl font-bold">Mega Sale 🔥</h2>

          <p className="mt-4 text-lg">
            Up to <span className="font-bold text-yellow-300">70% OFF</span> on
            Electronics, Fashion & Accessories.
          </p>
        </div>

        <button
          onClick={handleGrabDeal}
          className="mt-8 md:mt-0 bg-white text-indigo-700 px-8 py-4 rounded-xl font-bold hover:scale-105 transition"
        >
          Grab Deal
        </button>
      </div>
    </section>
  );
}

export default OfferBanner;
