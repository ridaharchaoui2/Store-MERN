import React from "react";
import CheckoutSteps from "../components/checkoutSteps";
import OrderScreen from "./orderScreen";

function PlaceOrder() {
  return (
    <>
      <CheckoutSteps step1 step2 step3 step4 />

      <OrderScreen />
    </>
  );
}

export default PlaceOrder;
