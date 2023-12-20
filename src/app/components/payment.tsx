"use client";
import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  PaymentElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import Button from "./Button";

const stripePromise = loadStripe(process.env.STRIPE_SECRET!.toString());

const options = {
  mode: "payment",
  amount: 0,
  currency: "inr",
  appearance: {
    type: "accordion",
    defaultCollapsed: false,
    radios: true,
    spacedAccordionItems: false,
  },
};

const CheckOutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  console.log(elements);
  console.log(stripe);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form
      style={{ width: "100vw" }}
      onSubmit={handleSubmit}
      className="my-4 d-flex align-items-center justify-content-center flex-column gap-4 card p-4"
    >
      <PaymentElement className="mx-auto w-[60%]" />
      <Button variant="primary" type="submit">
        Pay
      </Button>
      {/* {errorMessage && <div className="text-danger">{errorMessage}</div>} */}
    </form>
  );
};

const Payment: React.FC = () => {
  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckOutForm />
    </Elements>
  );
};

export default Payment;
