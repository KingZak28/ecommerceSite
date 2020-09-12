import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  // Stripe wants to see the integer in cents
  const stripeConversion = price * 100;
  const publishableKey =
    "pk_test_51HQaXjEgwl4Q5CM4O3qLPsUo536G5hRmzaSJugYvuLhh4dv8XlaWpsYhOBouV2d6SA9CBLWy96jts8XwiT7haG6H00QzTaZQ0A";
  const onToken = (token) => {
    console.log(token);
    alert("Payment was successful!");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Ghost Street Wear"
      billingAddress
      shippingAddress
      bitcoin
      image="https://brianchristner.io/content/images/size/w2000/2014/Sep/hostghost_logo_square.png"
      description={`Your total is $${price}`}
      amount={stripeConversion}
      panelLab="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
