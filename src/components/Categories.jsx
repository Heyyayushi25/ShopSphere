import { FaLaptop, FaTshirt, FaMobileAlt, FaCouch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Categories() {
  const navigate = useNavigate();

  const categories = [
    {
      name: "Electronics",
      category: "electronics",
      icon: <FaLaptop size={35} />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Fashion",
      category: "fashion",
      icon: <FaTshirt size={35} />,
      color: "from-pink-500 to-rose-500",
    },
    {
      name: "Mobiles",
      category: "smartphones",
      icon: <FaMobileAlt size={35} />,
      color: "from-purple-500 to-indigo-500",
    },
    {
      name: "Furniture",
      category: "furniture",
      icon: <FaCouch size={35} />,
      color: "from-orange-500 to-yellow-500",
    },
  ];
  const handleCategoryClick = (category) => {
    navigate(`/category/${category}`);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Shop by Category
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {categories.map((item) => (
            <div
              key={item.name}
              onClick={() => handleCategoryClick(item.category)}
              className={`bg-gradient-to-r ${item.color}
    text-white rounded-3xl p-10 text-center
    shadow-xl hover:scale-105 duration-300 cursor-pointer`}
            >
              <div className="flex justify-center mb-4">{item.icon}</div>

              <h3 className="text-xl font-semibold">{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
