import React from "react";
import StripeCheckout from "react-stripe-checkout";
import "./stripe-button.style.scss";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51KU8VNSHBees2eSi0L9NapLoiC3W10ymx1ubqh9mhAVtzUJfxyksBm1b4JbbIJSbk517aW5Btu7xBsfBGnYXOYUC00AXLzUVGj";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((res) => {
        alert(
          "Unable to process your payment.Please make sure you use the provided credit card"
        );
      })
      .catch((error) => {
        console.log("payment error:", error);
        alert("Payment Successful");
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Crown CLothing LTD."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
