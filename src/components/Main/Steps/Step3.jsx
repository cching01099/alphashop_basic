//step3: 信用卡資訊
import { useContext } from "react";
import { CreditCardContext } from "./CreditCardContext";

//payment需要input的東西，有重複的骨架拿出來
function PaymentInfo({
  className,
  inputLabel,
  text,
  placeholder,
  name,
  onChange,
}) {
  return (
    <div className={className}>
      <div className="input-label">{inputLabel}</div>
      <input
        type={text}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
      />
    </div>
  );
}

function Step3() {
  const { creditCardInfo, setCreditCardInfo } = useContext(CreditCardContext);

  function handleInputValue(e) {
    setCreditCardInfo({
      ...creditCardInfo,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <form className="col col-12" data-phase="credit-card">
      <h3 className="form-title">付款資訊</h3>
      <section className="form-body col col-12">
        <div className="col col-12">
          <PaymentInfo
            className="input-group input-w-lg-4 input-w-sm-full"
            input-label="持卡人姓名"
            type="text"
            placeholder="John Doe"
            name="cardHolder"
            onChange={handleInputValue}
          />
        </div>
        <div className="col col-12">
          <PaymentInfo
            className="input-group input-w-lg-4 input-w-sm-full"
            inputLabel="卡號"
            type="text"
            placeholder="1111 2222 3333 4444"
            name="cardNumber"
            onChange={handleInputValue}
          />
        </div>
        <div className="col col-12">
          <PaymentInfo
            className="input-group input-w-lg-3 input-w-sm-s3"
            inputLabel="有效期限"
            type="text"
            placeholder="MM/YY"
            name="expireDate"
            onChange={handleInputValue}
          />
          <PaymentInfo
            className="input-group input-w-lg-3 input-w-sm-s3"
            inputLabel="CVC / CCV"
            type="text"
            placeholder="123"
            name="cvc"
            onChange={handleInputValue}
          />
        </div>
      </section>
    </form>
  );
}

export default Step3;
