import { createContext, useState } from "react";

export const OrderContext = createContext();

function OrderProvider({ children }) {
  const [orders, setOrders] = useState([]);

  const placeOrder = (order) => {
    setOrders([...orders, order]);
  };

  return (
    <OrderContext.Provider
      value={{
        orders,
        placeOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}

export default OrderProvider;
