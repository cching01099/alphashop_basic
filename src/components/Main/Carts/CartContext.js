import { createContext, useState } from "react";

//購物車資料
const cartData = [
  {
    id: "1",
    name: "貓咪罐罐",
    img: "https://picsum.photos/300/300?text=1",
    price: 100,
    quantity: 2,
  },
  {
    id: "2",
    name: "貓咪干干",
    img: "https://picsum.photos/300/300?text=2",
    price: 200,
    quantity: 1,
  },
];

// export CartContext which the default value is cartData
export const CartContext = createContext(cartData);

export function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState(cartData);

  const handleQuantityClick = (id, action) => {
    const selectedItem = cartItems.map((item) => {
      if (item.id === id) {
        if (action === "add") {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        } else if (action === "minus") {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
      }
      return item;
    });
    // 篩掉數量是0的商品（＝item.數量要>0)
    const filterSelectedItem = selectedItem.filter((item) => item.quantity > 0);
    setCartItems(filterSelectedItem);
  };

  return (
    <CartContext.Provider value={{ cartItems, handleQuantityClick }}>
      {children}
    </CartContext.Provider>
  );
}