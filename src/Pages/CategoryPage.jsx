// import { useNavigate, useParams } from "react-router-dom";

// function CategoryPage() {
//   const { category } = useParams();
//   const navigate = useNavigate();

//   const categoryData = {
//     electronics: [
//       { name: "Smartphones", value: "smartphones", icon: "" },
//       { name: "Laptops", value: "laptops", icon: "" },
//       { name: "Tablets", value: "tablets", icon: "" },
//       {
//         name: "Mobile Accessories",
//         value: "mobile-accessories",
//         icon: "🎧",
//       },
//     ],

//     fashion: [
//       { name: "Men's Shirts", value: "mens-shirts", icon: "" },
//       { name: "Women's Dresses", value: "womens-dresses", icon: "" },
//       { name: "Women's Shoes", value: "womens-shoes", icon: "" },
//       { name: "Women's Jewellery", value: "womens-jewellery", icon: "" },
//       { name: "Women's Bags", value: "womens-bags", icon: "" },
//       { name: "Men's Shoes", value: "mens-shoes", icon: "" },
//       { name: "Men's Watches", value: "mens-watches", icon: "" },
//       { name: "Women's Watches", value: "womens-watches", icon: "" },
//       { name: "Sunglasses", value: "sunglasses", icon: "" },
//       { name: "Tops", value: "tops", icon: "" },
//     ],

//     smartphones: [{ name: "Smartphones", value: "smartphones", icon: "" }],

//     furniture: [{ name: "Furniture", value: "furniture", icon: "" }],
//   };

//   const subCategories = categoryData[category] || [];

//   return (
//     <div className="max-w-7xl mx-auto px-6 py-12">
//       <h1 className="text-4xl font-bold text-center mb-12 capitalize">
//         {category} Categories
//       </h1>

//       <div className="grid md:grid-cols-4 gap-8">
//         {subCategories.map((item) => (
//           <div
//             key={item.value}
//             onClick={() => navigate(`/shop?subcategory=${item.value}`)}
//             className="cursor-pointer bg-white rounded-3xl shadow-xl p-10 text-center hover:scale-105 duration-300"
//           >
//             <div className="text-5xl mb-4">{item.icon}</div>

//             <h2 className="text-xl font-bold">{item.name}</h2>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default CategoryPage;
import { useNavigate, useParams } from "react-router-dom";

function CategoryPage() {
  const { category } = useParams();
  const navigate = useNavigate();

  const categoryData = {
    electronics: [
      {
        name: "Laptops",
        value: "laptops",
        image:
          "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600",
      },
      {
        name: "Smartphones",
        value: "smartphones",
        image:
          "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600",
      },
      {
        name: "Tablets",
        value: "tablets",
        image:
          "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600",
      },
      {
        name: "Accessories",
        value: "mobile-accessories",
        image:
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
      },
    ],

    fashion: [
      {
        name: "Men's Shirts",
        value: "mens-shirts",
        image:
          "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600",
      },
      {
        name: "Women's Dresses",
        value: "womens-dresses",
        image:
          "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600",
      },
      {
        name: "Women's Shoes",
        value: "womens-shoes",
        image:
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
      },
      {
        name: "Jewellery",
        value: "womens-jewellery",
        image:
          "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600",
      },
      {
        name: "Bags",
        value: "womens-bags",
        image:
          "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600",
      },
      {
        name: "Tops",
        value: "tops",
        image:
          "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600",
      },
      {
        name: "Men's Shoes",
        value: "mens-shoes",
        image:
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
      },
      {
        name: "Watches",
        value: "mens-watches",
        image:
          "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
      },
    ],

    smartphones: [
      {
        name: "Smartphones",
        value: "smartphones",
        image:
          "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600",
      },
    ],

    furniture: [
      {
        name: "Furniture",
        value: "furniture",
        image:
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600",
      },
    ],
  };

  const subCategories = categoryData[category] || [];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 capitalize">
        {category}
      </h1>

      <div className="grid md:grid-cols-4 gap-8">
        {subCategories.map((item) => (
          <div
            key={item.value}
            onClick={() => navigate(`/shop?subcategory=${item.value}`)}
            className="bg-white rounded-3xl shadow-xl overflow-hidden cursor-pointer hover:scale-105 duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-52 object-cover"
            />

            <div className="p-5 text-center">
              <h2 className="text-xl font-bold">{item.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;
