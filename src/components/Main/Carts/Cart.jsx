import { useContext } from "react";
import { CartContext } from "../Constants/CartContext";
import { ReactComponent as SvgMinus } from "../../../icons/minus.svg";
import { ReactComponent as SvgPlus } from "../../../icons/plus.svg";

export default function Cart({ shipFee }) {
  const { cartItems, handleQuantityClick } = useContext(CartContext);
  //整筆購物車的金額(購物車裡的產品＋運費)
  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, Number(shipFee));

  return (
    <section className="cart-container col col-lg-5 col-sm-12">
      <h3 className="cart-title">購物籃</h3>
      <section className="product-list col col-12" data-total-price="0">
        <CartInfo items={cartItems} handleQuantityClick={handleQuantityClick} />
      </section>
      <CartPrice totalPrice={totalPrice} shipFee={shipFee} />
    </section>
  );
}

//購物車清單:動態呈現item細項資料 (+-圖片檔上的事件在CartContext做了）
function CartInfo({ items, handleQuantityClick }) {
  //動態渲染item細項資料
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
          <div className="price">${item.quantity * item.price}</div>
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

//購物車計價的元件
function CartPrice({ totalPrice, shipFee }) {
  return (
    <section className="cart-info shipping col col-12">
      <div className="text">運費</div>
      <div className="price">{shipFee === 500 ? `$ ${shipFee}` : "免費"}</div>
      <section className="cart-info total col col-12">
        <div className="text">小計</div>
        <div className="price">${totalPrice.toLocaleString()}</div>
      </section>
    </section>
  );
}
