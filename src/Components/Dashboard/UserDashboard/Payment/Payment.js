import { Elements } from "@stripe/react-stripe-js";
import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import PaymentCard from "./PaymentCard";

const Payment = ({ handlePayment }) => {
  const stripePromise = loadStripe(
    "pk_test_51Ih9R1EjGAs5yqWsM3xIwCROkcswesaKe1rde3uZ7UGKUEWH3QWYMsygAWaC6wPb8wXCEon69z7dY9pzuqPoHBq900YussJkmv"
  );
  return (
    <>
      <Elements stripe={stripePromise}>
        <PaymentCard handlePayment={handlePayment} />
      </Elements>
    </>
  );
};

export default Payment;