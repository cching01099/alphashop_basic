import { ReactComponent as SvgMinus } from "../../../icons/minus.svg";
import { ReactComponent as SvgPlus } from "../../../icons/plus.svg";
import { useContext } from "react";
import { MainContext } from "../../Contexts/MainContext";

//購物車清單:動態呈現item細項資料 & +-圖片檔上的事件(也就是數量的增減)
function CartInfo({ cartItems, onQuantityCHange }) {
  // +-圖片上的click事件，傳入id 和action 判斷行為
  const handleQuantityClick = (id, action) => {
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
    onQuantityCHange(filterSelectedItem);
  };
  //動態渲染item細項資料
  const itemLists = cartItems.map((item) => {
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
function CartBilling({ price, title }) {
  return (
    <section className="cart-info shipping col col-12">
      <div className="text">{title}</div>
      <div className="price">{price}</div>
    </section>
  );
}
//整個 Cart（定義state＋整併上面的各分部功能to render ）
export default function Cart() {
  const cartItems = useContext(MainContext).cart.data[0];
  const totalPrice = useContext(MainContext).cart.total;
  const shipPrice = useContext(MainContext).cart.shipPrice[0];
  const onQuantityCHange = useContext(MainContext).cart.Quantity;

  return (
    <section className="cart-container col col-lg-5 col-sm-12">
      <h3 className="cart-title">購物籃</h3>
      <CartInfo cartItems={cartItems} onQuantityCHange={onQuantityCHange} />
      <CartBilling title="運費" price={shipPrice} />
      <CartBilling title="小計" price={"$ " + totalPrice} />
    </section>
  );
}
