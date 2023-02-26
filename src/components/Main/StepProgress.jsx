import { ReactComponent as PgCompleteIcon } from "../../icons/pg-complete.svg";

//三個重複類似的架構拉出來：content、bar條
//progress裡面的Content
function ProgressContent({ phase, stepNum, label }) {
  return (
    <span className="progress-group" data-phase={phase}>
      <span className="progress-icon">
        <span className="text">{stepNum}</span>
        <svg className="icon cursor-point">
          <PgCompleteIcon />
        </svg>
      </span>
      <span className="progress-label">{label}</span>
    </span>
  );
}
// progress的bar條
function ProgressBar({ stepNum }) {
  return <span className="progress-bar" data-order={stepNum}></span>;
}

export default function StepProgress() {
  return (
    <section className="progress-container col col-12">
      <ProgressContent phase="address" stepNum={1} label="寄送地址" />
      <ProgressBar stepNum={1} />
      <ProgressContent phase="shipping" stepNum={2} label="運送方式" />
      <ProgressBar stepNum={2} />
      <ProgressContent phase="credit-card" stepNum={3} label="付款資訊" />
    </section>
  );
}
