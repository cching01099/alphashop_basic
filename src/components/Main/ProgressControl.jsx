import { ReactComponent as RightArrow } from "../../icons/right-arrow.svg";
import { ReactComponent as LeftArrow } from "../../icons/left-arrow.svg";

function ProgressControl() {
  return (
    <section className="progress-control-container col col-lg-6 col-sm-12">
      <section className="button-group col col-12" data-phase="address">
        <button className="next">
          下一步
          <svg className="cursor-point">
            <RightArrow />
          </svg>
        </button>
      </section>
      <section className="button-group col col-12" data-phase="shipping">
        <button className="prev">
          <svg className="cursor-point">
            <LeftArrow />
          </svg>
          上一步
        </button>
        <button className="next">
          下一步
          <svg className="cursor-point">
            <RightArrow />
          </svg>
        </button>
      </section>
      <section className="button-group col col-12" data-phase="credit-card">
        <button className="prev">
          <svg className="cursor-point">
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
