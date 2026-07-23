import axios from "axios";

const API = "https://dummyjson.com/products";

export const getProducts = async () => {
  const response = await axios.get(API);
  return response.data.products;
};

export const getProductById = async (id) => {
  const response = await axios.get(`${API}/${id}`);
  return response.data;
};
