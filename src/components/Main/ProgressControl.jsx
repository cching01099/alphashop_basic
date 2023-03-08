import { ReactComponent as RightArrow } from "../../icons/right-arrow.svg";
import { ReactComponent as LeftArrow } from "../../icons/left-arrow.svg";
import { MainContext } from "../Contexts/MainContext";
import { useContext } from "react";

function ProgressControl({ currentStep, setCurrentStep }) {
  const total = useContext(MainContext).cart.total;
  const creditCard = useContext(MainContext).pay[0];
  const resetCreditCard = useContext(MainContext).pay[1];

  const handleOnClick = (e) => {
    if (e === "prev") {
      if (currentStep === 1) return;
      setCurrentStep((p) => p - 1);
    } else if (e === "next") {
      if (currentStep === 3) return;
      setCurrentStep((p) => p + 1);
    }
  };

  const handlePaymentData = () => {
    console.log(`持卡人姓名：${creditCard.name}`);
    console.log(`卡號：${creditCard.number}`);
    console.log(`日期：${creditCard.date}`);
    console.log(`cvc： ${creditCard.cvc}`);
    console.log(`總金額：${total}`);
    setCurrentStep(1);
    resetCreditCard({ name: "", number: "", date: "", cvc: "" });
  };

  return (
    <section className="progress-control-container col col-lg-6 col-sm-12">
      <section className="button-group col col-12" data-phase="address">
        <button
          // cursor-point 本來是在svg上，但現在因有事件掛在btn上所以要更動
          className="next cursor-point"
          onClick={() => handleOnClick("next")}
        >
          下一步
          <svg>
            <RightArrow />
          </svg>
        </button>
      </section>
      <section className="button-group col col-12" data-phase="shipping">
        <button
          className="prev cursor-point"
          onClick={() => handleOnClick("prev")}
        >
          <svg>
            <LeftArrow />
          </svg>
          上一步
        </button>
        <button
          className="next cursor-point"
          onClick={() => handleOnClick("next")}
        >
          下一步
          <svg>
            <RightArrow />
          </svg>
        </button>
      </section>
      <section className="button-group col col-12" data-phase="credit-card">
        <button
          className="prev cursor-point"
          onClick={() => handleOnClick("prev")}
        >
          <svg>
            <LeftArrow />
          </svg>
          上一步
        </button>
        <button className="next" onClick={handlePaymentData}>
          確認下單
        </button>
      </section>
    </section>
  );
}

export default ProgressControl;
