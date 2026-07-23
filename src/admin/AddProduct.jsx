import { useState } from "react";

function AddProduct() {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    stock: "",
    brand: "",
    image: "",
    description: "",
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(product);

    alert("Product Added Successfully!");

    setProduct({
      name: "",
      price: "",
      category: "",
      stock: "",
      brand: "",
      image: "",
      description: "",
    });
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Add New Product</h1>

      <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={product.name}
          onChange={handleChange}
          className="border p-3 rounded-lg"
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
          className="border p-3 rounded-lg"
          required
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={product.category}
          onChange={handleChange}
          className="border p-3 rounded-lg"
          required
        />

        <input
          type="number"
          name="stock"
          placeholder="Stock"
          value={product.stock}
          onChange={handleChange}
          className="border p-3 rounded-lg"
          required
        />

        <input
          type="text"
          name="brand"
          placeholder="Brand"
          value={product.brand}
          onChange={handleChange}
          className="border p-3 rounded-lg"
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={product.image}
          onChange={handleChange}
          className="border p-3 rounded-lg"
        />

        <textarea
          name="description"
          placeholder="Product Description"
          value={product.description}
          onChange={handleChange}
          className="border p-3 rounded-lg md:col-span-2"
          rows="5"
        />

        <button
          type="submit"
          className="bg-black text-white py-3 rounded-xl md:col-span-2 hover:bg-gray-800"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
