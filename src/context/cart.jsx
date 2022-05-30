import { createContext, useState } from "react";

export const CartContext = createContext({
  isToogle: false,
  setIsToogle: () => {},
});

export const CartProvider = ({ children }) => {
  const [isToogle, setIsToogle] = useState(false);

  const value = {
    isToogle,
    setIsToogle,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
