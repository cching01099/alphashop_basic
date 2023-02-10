import StepProgress from "./StepProgress";
import ProgressControl from "./ProgressControl";
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";
import Carts from "./Carts/Cart";

function Main() {
  return (
    <main className="site-main">
      <div className="main-container">
        <section
          className="register-container col col-lg-6 col-sm-12"
          data-phase="1"
          data-total-price="0"
        >
          <h2 className="register-title col col-12">結帳</h2>
          <StepProgress />
          <section className="form-container col col-12">
            <Step1 />
            <Step2 />
            <Step3 />
          </section>
        </section>
        <Carts />
        <ProgressControl />
      </div>
    </main>
  );
}

export default Main;
