import { ReactComponent as SvgMinus } from "../../../icons/minus.svg";
import { ReactComponent as SvgPlus } from "../../../icons/plus.svg";
import { useState } from "react";
import cartData from "../Data/cartData.js";

export default function Cart({ shippingFee }) {
  const [cartProducts, setCartProducts] = useState(cartData);
  const productsTotal = cartProducts
    .map((item) => item.price * item.quantity)
    .reduce((sum, price) => sum + price, 0);
  const total = shippingFee === 500 ? 500 + productsTotal : productsTotal + 0;
  return (
    <section className="cart-container col col-lg-5 col-sm-12">
      <h3 className="cart-title">購物籃</h3>
      <section className="product-list col col-12" data-total-price="0">
        <CartItems
          cartProducts={cartProducts}
          onQuantityChange={setCartProducts}
        />
      </section>
      <CartPrice title="運費" price="免費" />
      <CartPrice title="小計" price={"$ " + total} />
    </section>
  );
}

function CartItems({ cartProducts, onQuantityChange }) {
  //購物車的數量增減動作
  function handleQuantityClick(e) {
    const targetId = e.target.closest(".product-container").id;
    const isMinus = e.target.parentElement.classList.contains("minus");
    const nextProduct = cartProducts.map((item) => {
      if (item.id === targetId) {
        return {
          ...item,
          quantity: isMinus ? item.quantity - 1 : item.quantity + 1,
        };
      }
      return item;
    });
    // 篩掉數量是0的商品（＝item.數量要>0)
    const selectedItem = nextProduct.filter((item) => item.quantity > 0);
    onQuantityChange(selectedItem);
  }
  //動態渲染購物車清單裡的資料
  const cartLists = cartProducts.map((item) => {
    return (
      <div
        className="product-container col col-12"
        data-count={item.quantity}
        data-price={item.price}
        key={item.id}
        id={item.id}
      >
        <img className="img-container" src={item.img} alt="" />
        <div className="product-info">
          <div className="product-name">{item.name}</div>
          <div className="product-control-container">
            <div className="product-control">
              <SvgMinus
                className="product-action minus"
                onClick={handleQuantityClick}
              />
              <span className="product-count">{item.quantity}</span>
              <SvgPlus
                className="product-action plus"
                onClick={handleQuantityClick}
              />
            </div>
          </div>
          <div className="price">{item.price}</div>
        </div>
      </div>
    );
  });
  return cartLists;
}

//購物車計價的元件
function CartPrice({ price, title }) {
  return (
    <section className="cart-info shipping col col-12">
      <div className="text">{title}</div>
      <div className="price">{price}</div>
    </section>
  );
}
