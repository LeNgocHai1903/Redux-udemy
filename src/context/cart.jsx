import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
  isToogle: false,
  setIsToogle: () => {},
  cartItems: [],
  changeQuantityOfItemToCard: () => {},
  deleteItemInCart: () => {},
});

const changeQuantityCartItem = (cartItems, productToAdd, type) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    switch (type) {
      case "increase":
        return cartItems.map((cart) =>
          cart.id === productToAdd.id
            ? { ...cart, quantity: cart.quantity + 1 }
            : cart
        );

      case "decrease":
        return cartItems.map((cart) =>
          cart.id === productToAdd.id
            ? { ...cart, quantity: cart.quantity - 1 }
            : cart
        );

      default:
        break;
    }
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const deleteItemFromCart = (cartItems, productToDelete) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToDelete.id
  );

  if (existingCartItem) {
    return cartItems.filter((item) => item.id !== productToDelete.id);
  }

  return [...cartItems];
};

const getTotalPrice = (cartItems) => {
  let initialValue = 0;
  return cartItems.reduce(
    (accumulator, cart) => accumulator + cart.price * cart.quantity,
    initialValue
  );
};

export const CartProvider = ({ children }) => {
  const [isToogle, setIsToogle] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const changeQuantityOfItemToCard = (productToAdd, type) =>
    setCartItems(changeQuantityCartItem(cartItems, productToAdd, type));

  const deleteItemInCard = (productToDelete) => {
    setCartItems(deleteItemFromCart(cartItems, productToDelete));
  };

  useEffect(() => {
    setTotalPrice(getTotalPrice(cartItems));
  }, [cartItems]);

  const value = {
    isToogle,
    setIsToogle,
    changeQuantityOfItemToCard,
    deleteItemInCard,
    cartItems,
    totalPrice,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
