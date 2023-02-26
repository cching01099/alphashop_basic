import StepProgress from "./StepProgress";
import ProgressControl from "./ProgressControl";
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";
import Carts from "./Carts/Cart";

import { useState } from "react";

function Main() {
  //會變動的是每一step的狀態，所以先設定currentPhase作為狀態變化的值，以及設定初始值為1
  //傳遞值：data-phase的值，現在是到了哪一階段(currentPhase)＝切換步驟事件
  const [currentPhase, setCurrentPhase] = useState(1);

  return (
    <main className="site-main">
      <div className="main-container">
        {/* data-phase值的更動(現在到了哪一階段），以去連動StepProgress與表單顯示*/}
        <section
          className="register-container col col-lg-6 col-sm-12"
          data-phase={currentPhase}
          data-total-price="0"
        >
          <h2 className="register-title col col-12">結帳</h2>
          <StepProgress currentPhase={currentPhase} />
          <section className="form-container col col-12">
            <Step1 />
            <Step2 />
            <Step3 />
          </section>
        </section>
        <Carts />
        {/* data-phase值的更動(現在到了哪一階段），會去連動切換鈕呈現、切換步驟事件 */}
        <ProgressControl
          currentPhase={currentPhase}
          setCurrentPhase={setCurrentPhase}
        />
      </div>
    </main>
  );
}

export default Main;
