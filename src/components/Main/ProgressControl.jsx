import { ReactComponent as RightArrow } from "../../icons/right-arrow.svg";
import { ReactComponent as LeftArrow } from "../../icons/left-arrow.svg";
import { MainContext } from "../Contexts/MainContext";

function ProgressControl({ currentPhase, setCurrentPhase }) {
  const handleOnClick = (e) => {
    if (e === "prev") {
      if (currentPhase === 1) return;
      setCurrentPhase((p) => p - 1);
    } else if (e === "next") {
      if (currentPhase === 3) return;
      setCurrentPhase((p) => p + 1);
    }
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
        <button className="next">確認下單</button>
      </section>
    </section>
  );
}

export default ProgressControl;
