// pages/index.js
import "h8k-components";
import PaymentValidationPage from "./payment-validation";

const App = () => {
  return (
    <div className="App">
      <h8k-navbar header="Payment Validation"></h8k-navbar>
      <div className="layout-row justify-content-center mt-30">
        <PaymentValidationPage />
      </div>
    </div>
  );
};

export default App;
