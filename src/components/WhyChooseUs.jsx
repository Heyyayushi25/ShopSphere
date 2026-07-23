import {
  FaShippingFast,
  FaShieldAlt,
  FaUndoAlt,
  FaHeadset,
} from "react-icons/fa";

function WhyChooseUs() {
  const features = [
    {
      icon: <FaShippingFast size={40} />,
      title: "Free Shipping",
      desc: "Free delivery on orders above ₹999.",
    },
    {
      icon: <FaShieldAlt size={40} />,
      title: "Secure Payment",
      desc: "100% safe and encrypted transactions.",
    },
    {
      icon: <FaUndoAlt size={40} />,
      title: "Easy Returns",
      desc: "7-day hassle-free return policy.",
    },
    {
      icon: <FaHeadset size={40} />,
      title: "24/7 Support",
      desc: "We're always here to help you.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-14">
          Why Shop With Us?
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {features.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 hover:shadow-2xl duration-300 text-center"
            >
              <div className="flex justify-center text-indigo-600 mb-5">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold">{item.title}</h3>

              <p className="text-gray-600 mt-3">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
