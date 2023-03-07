//step3: 信用卡資訊
import { useContext } from "react";
import { MainContext } from "../../Contexts/MainContext";

//payment需要input的東西，有重複的骨架拿出來
function PaymentInfo({
  payment,
  titleClassName = "input-label",
  onChange,
  value,
}) {
  return (
    <div className={payment.className}>
      <div className={titleClassName}>{payment.title}</div>
      <input
        type={payment.type}
        placeholder={payment.placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

function Step3() {
  const [creditCard, setCreditCard] = useContext(MainContext).pay;

  function handleInputValue(e, item) {
    setCreditCard({
      ...creditCard,
      [item]: e.target.value,
    });
  }
  return (
    <form className="col col-12" data-phase="credit-card">
      <h3 className="form-title">付款資訊</h3>
      <section className="form-body col col-12">
        <div className="col col-12">
          <PaymentInfo
            onChange={(e) => handleInputValue(e, "name")}
            value={creditCard.name}
            payment={{
              className: "input-group input-w-lg-4 input-w-sm-full",
              title: "持卡人姓名",
              type: "text",
              placeholder: "John Doe",
            }}
          />
        </div>
        <div className="col col-12">
          <PaymentInfo
            onChange={(e) => handleInputValue(e, "number")}
            value={creditCard.number}
            payment={{
              className: "input-group input-w-lg-4 input-w-sm-full",
              title: "卡號",
              type: "text",
              placeholder: "1111 2222 3333 4444",
            }}
          />
        </div>
        <div className="col col-12">
          <PaymentInfo
            onChange={(e) => handleInputValue(e, "date")}
            value={creditCard.date}
            payment={{
              className: "input-group input-w-lg-3 input-w-sm-full",
              title: "日期",
              type: "text",
              placeholder: "MM/YY",
            }}
          />
          <PaymentInfo
            onChange={(e) => handleInputValue(e, "cvc")}
            value={creditCard.cvc}
            payment={{
              className: "input-group input-w-lg-3 input-w-sm-s3",
              title: "CVC / CCV",
              type: "text",
              placeholder: "123",
            }}
          />
        </div>
      </section>
    </form>
  );
}

export default Step3;
