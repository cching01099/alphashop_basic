import { useState, createContext } from "react";

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

export default function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(cartData);
  // +-圖片上的click事件，傳入id 和action 判斷行為
  const handleOnClick = (id, action) => {
    const selectedItem = cartItems.map((item) => {
      //辨別商品的id是否為傳入的id，以及action行為去判斷數量的增減與否
      if (item.id === id) {
        if (action === "plus") {
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
    <CartContext.Provider value={{ cartItems, handleOnClick }}>
      {children}
    </CartContext.Provider>
  );
}
