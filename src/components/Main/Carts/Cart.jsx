import { useContext } from "react";
import { CartContext } from "./CartContext.js";
import { ReactComponent as SvgMinus } from "../../../icons/minus.svg";
import { ReactComponent as SvgPlus } from "../../../icons/plus.svg";

//購物車清單:動態呈現item細項資料 (+-圖片檔上的事件在CartContext)
function CartInfo({ items, onQuantityCHange }) {
  //動態渲染item細項資料
  const handleQuantityClick = (id, action) => {
    const selectedItem = items.map((item) => {
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
    onQuantityCHange(filterSelectedItem);
  };
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
              <SvgMinus
                className="product-action cursor-point"
                onClick={() => handleQuantityClick(item.id, "minus")}
              />
              <span className="product-count">{item.quantity}</span>
              <SvgPlus
                className="product-action cursor-point"
                onClick={() => handleQuantityClick(item.id, "plus")}
              />
            </div>
          </div>
          <div className="price">${item.price * item.quantity}</div>
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
function CartBilling({ totalPrice, shipFee }) {
  return (
    <div>
      <section className="cart-info shipping col col-12">
        <div className="text">運費</div>
        <div className="price">{shipFee === 500 ? `$ ${shipFee}` : "免費"}</div>
      </section>
      <section className="cart-info total col col-12">
        <div className="text">小計</div>
        <div className="price">${totalPrice.toLocaleString()}</div>
      </section>
    </div>
  );
}
//整個 Carts
export default function Cart({ shipFee }) {
  const [cartItems, setCartItems] = useContext(CartContext);

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, Number(shipFee));

  return (
    <section className="cart-container col col-lg-5 col-sm-12">
      <h3 className="cart-title">購物籃</h3>
      <CartInfo items={cartItems} handleQuantityClick={setCartItems} />
      <CartBilling totalPrice={totalPrice} shipFee={shipFee} />
    </section>
  );
}
