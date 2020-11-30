import React, { createContext, useState } from "react";

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  const addOrder = (title) => {
    setOrders([...orders, title]);
  };

  return (
    <StateContext.Provider value={{ orders, addOrder, setOrders }}>
      {children}
    </StateContext.Provider>
  );
};
