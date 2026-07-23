import { FaEdit, FaTrash } from "react-icons/fa";

function AdminProducts() {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      category: "Electronics",
      price: "₹2,999",
      stock: 25,
    },
    {
      id: 2,
      name: "Men's Hoodie",
      category: "Fashion",
      price: "₹999",
      stock: 40,
    },
    {
      id: 3,
      name: "iPhone 15",
      category: "Mobiles",
      price: "₹79,999",
      stock: 12,
    },
    {
      id: 4,
      name: "Luxury Sofa",
      category: "Furniture",
      price: "₹24,999",
      stock: 8,
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Products</h1>

        <input
          type="text"
          placeholder="Search Product..."
          className="border rounded-lg px-4 py-2 outline-none w-72"
        />
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-black text-white">
            <tr>
              <th className="p-4 text-left">Product</th>
              <th className="p-4 text-left">Category</th>
              <th className="p-4 text-left">Price</th>
              <th className="p-4 text-left">Stock</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.map((item) => (
              <tr
                key={item.id}
                className="border-b hover:bg-gray-100 duration-200"
              >
                <td className="p-4">{item.name}</td>
                <td className="p-4">{item.category}</td>
                <td className="p-4">{item.price}</td>
                <td className="p-4">{item.stock}</td>

                <td className="p-4 flex justify-center gap-4">
                  <button className="text-blue-600 hover:scale-110">
                    <FaEdit size={20} />
                  </button>

                  <button className="text-red-600 hover:scale-110">
                    <FaTrash size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminProducts;
