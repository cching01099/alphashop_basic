import { ReactComponent as RightArrow } from "../../icons/right-arrow.svg";
import { ReactComponent as LeftArrow } from "../../icons/left-arrow.svg";

//要傳進的prop是在main裡宣告的state值（currentPhase for切換步驟事件）

function ProgressControl({ currentPhase, setCurrentPhase }) {
  //設定條件式去判斷事件e是上一步（prev)or下一步(next)
  //如果e是上一步：currentPhase＝1，就不要執行setCurrentPhase（因為第一步驟沒有上一步了）; 其他則代表還有頁面可以回到上一步，setter function就要作用(phase就要-1回到上一頁)
  //如果是e下一步：currentPhase＝3，就不要執行setCurrentPhase（因為第三步驟沒有下一步了）; 其他則代表還有頁面可以到下一步，setter function就要作用(phase就要＋1到下一頁)
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
