import { ReactComponent as SvgMinus } from "../../../icons/minus.svg";
import { ReactComponent as SvgPlus } from "../../../icons/plus.svg";
import { useState } from "react";
import CartData from "../Data/CartData.js";

//購物車清單:動態呈現item細項資料 & +-圖片檔上的事件(也就是數量的增減)
function CartInfo({ items, handleOnClick }) {
  const itemLists = items.map((item) => {
    return (
      <div
        className="product-container col col-12"
        data-count={item.quantity}
        data-price={item.price}
        key={item.id}
      >
        <img className="img-container" src={item.img} alt="" />
        <div className="product-info">
          <div className="product-name">{item.name}</div>
          <div className="product-control-container">
            <div className="product-control">
              <svg
                className="product-action minus"
                onClick={() => handleOnClick("minus", item.id, item.quantity)}
              >
                <SvgMinus />
              </svg>
              <span className="product-count">{item.quantity}</span>
              <svg
                className="product-action plus"
                onClick={() => handleOnClick("plus", item.id, item.quantity)}
              >
                <SvgPlus />
              </svg>
            </div>
          </div>
          <div className="price">${item.price}</div>
        </div>
      </div>
    );
  });
  return (
    <section className="product-list col col-12" data-total-price="0">
      {itemLists}
    </section>
  );
}

//購物車的計價
function CartBilling({ totalPrice }) {
  return (
    <div>
      <section className="cart-info shipping col col-12">
        <div className="text">運費</div>
        <div className="price">免運</div>
      </section>
      <section className="cart-info total col col-12">
        <div className="text">小計</div>
        <div className="price">${totalPrice}</div>
      </section>
    </div>
  );
}

//整個 Cart（定義state要傳進到上面的各分部＋整併上面的各分部功能for render ）
export default function Carts() {
  const [cartItems, setCartItems] = useState(CartData);
  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  // +-圖片上的click事件，傳入id 和action 判斷行為
  const handleOnClick = (action, id, quantity) => {
    const selectedItem = cartItems.map((item) => {
      //辨別商品的id是否為傳入的id，以及action行為去判斷數量的增減與否
      if (item.id === id) {
        if (action === "plus") {
          return {
            ...item,
            quantity: quantity + 1,
          };
        } else if (action === "minus") {
          return {
            ...item,
            quantity: quantity - 1,
          };
        }
      }
      return item;
    });
    // 篩掉數量是0的商品（＝item.數量要>0)
    setCartItems(selectedItem.filter((item) => item.quantity > 0));
  };

  return (
    <section className="cart-container col col-lg-5 col-sm-12">
      <h3 className="cart-title">購物籃</h3>
      <CartInfo items={cartItems} />
      <CartBilling totalPrice={totalPrice} />
    </section>
  );
}
