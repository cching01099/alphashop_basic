import { ReactComponent as SvgIconMinus } from "../../../icons/minus.svg";
import { ReactComponent as SvgPlus } from "../../../icons/plus.svg";
import Product1 from "../../../images/product-1.jpg";
import Product2 from "../../../images/product-2.jpg";
function Cart() {
  return (
    <section className="cart-container col col-lg-5 col-sm-12">
      <h3 className="cart-title">購物籃</h3>
      <section className="product-list col col-12" data-total-price="0">
        <div
          className="product-container col col-12"
          data-count="0"
          data-price="3999"
        >
          <img className="img-container" src={Product1} />
          <div className="product-info">
            <div className="product-name">破壞補丁修身牛仔褲</div>
            <div className="product-control-container">
              <div className="product-control">
                <svg className="product-action minus">
                  <SvgIconMinus />
                </svg>
                <span className="product-count">0</span>
                <svg className="product-action plus">
                  <SvgPlus />
                </svg>
              </div>
            </div>
            <div className="price">399</div>
          </div>
        </div>
        <div
          className="product-container col col-12"
          data-count="0"
          data-price="1299"
        >
          <img className="img-container" src={Product2} />
          <div className="product-info">
            <div className="product-name">刷色直筒牛仔褲</div>
            <div className="product-control-container">
              <div className="product-control">
                <svg className="product-action minus">
                  <SvgIconMinus />
                </svg>
                <span className="product-count">0</span>
                <svg className="product-action plus">
                  <SvgPlus />
                </svg>
              </div>
            </div>
            <div className="price">299</div>
          </div>
        </div>
      </section>
      <section className="cart-info shipping col col-12">
        <div className="text">運費</div>
        <div className="price">100</div>
      </section>
      <section className="cart-info total col col-12">
        <div className="text">小計</div>
        <div className="price">0</div>
      </section>
    </section>
  );
}

export default Cart;
