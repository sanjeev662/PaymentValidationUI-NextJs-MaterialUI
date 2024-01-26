import React from "react";
import PaymentValidationPage from "./payment-validation";
import NavbarPage from "./navbar";

const App = () => {
  return (
    <div className="App">
      <NavbarPage/>
      <div className="layout-row justify-content-center mt-30">
        <PaymentValidationPage />
      </div>
    </div>
  );
};

export default App;
