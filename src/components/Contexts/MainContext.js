import { createContext, useState } from "react";
import cardData from "../Main/Constants/cartData.js";

//default
export const MainContext = createContext();

//credit-card info
const creditCard = {
  name: "",
  number: "",
  date: "",
  cvc: "",
};

// all data's state & function
export function DataProvider({ children }) {
  const [cartItems, setCartItems] = useState(cardData);
  const [shipPrice, setShipPrice] = useState("免費");
  const [creditCard, setCreditCard] = useState(creditCard);

  //cart's totalPrice(cartItems+shipPrice)
  const cartItemsTotal = cartItems
    .map((item) => item.price * item.quantity)
    .reduce((sum, price) => sum + price, 0);
  const totalPrice =
    shipPrice === 500 ? 500 + cartItemsTotal : cartItemsTotal + 0;
  // cart's Quantity
  const handleQuantityClick = (quantity) => {
    setCartItems(quantity);
  };
  //shipping switch
  const handleRadioChange = (price) => {
    setShipPrice(price);
  };
  // 共用的context‘s data
  const contextValue = {
    cart: {
      data: [cartItems, setCartItems],
      shipPrice: [shipPrice, setShipPrice],
      total: totalPrice,
      Quantity: handleQuantityClick,
      RadioChange: handleRadioChange,
    },
    pay: [creditCard, setCreditCard],
  };
  return (
    <MainContext.Provider value={contextValue}>{children}</MainContext.Provider>
  );
}
