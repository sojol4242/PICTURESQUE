import React, { useMemo, useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useHistory } from "react-router";
import swal from "sweetalert";
import "./payment.css";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyCheckAlt } from "@fortawesome/free-solid-svg-icons";
const useOptions = () => {
  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize: "16px",
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4",
          },
        },
        invalid: {
          color: "#9e2146",
        },
      },
    }),
    []
  );

  return options;
};

const PaymentCard = ({ handlePayment }) => {
  const history = useHistory();
  const stripe = useStripe();
  const elements = useElements();

  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      setPaymentError(error.message);
      setPaymentSuccess(null);
    } else {
      setPaymentSuccess(paymentMethod.id);
      setPaymentError(null);
      handlePayment(paymentMethod.id);
      swal("Success!", "Payment completed successfully!! 😃😃😃", "success");

      history.replace("/");
    }
  };
  return (
    <>
      <h4>
        Payment Form <FontAwesomeIcon icon={faMoneyCheckAlt}></FontAwesomeIcon>
      </h4>
      <form onSubmit={handleSubmit}>
        <CardElement className="mt-3 cardElement" />
        {paymentError && (
          <p className="mt-3" style={{ color: "red" }}>
            {paymentError}
          </p>
        )}
        <motion.button
          whileHover={{
            scale: 1.01,
            textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px 0px 8px rgb(255,255,255)",
          }}
          disabled={!stripe}
          className="checkBtn mt-3"
          type="submit"
        >
          Pay
        </motion.button>
        {/* <button className="checkBtn" type="submit" disabled={!stripe}>
          Pay
        </button> */}
      </form>

      {paymentSuccess && (
        <p style={{ color: "green" }}>
          Your payment done successfully. We will send you contact with you soon
        </p>
      )}
    </>
  );
};

export default PaymentCard;
