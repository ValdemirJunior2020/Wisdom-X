import React from "react";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

const Donate: React.FC = () => {
  return (
    <PayPalScriptProvider
      options={{
        clientId: "AaQPiJ1uvivVOf8uuhxEnyJpsvpiiWHX8IpAe0M88S3R3CFBV7glWKHKuW0ce57y_rA88FbTzY8h-EYW",
        currency: "USD",
      }}
    >
      <div className="donate-container">
        <h2 className="text-lg font-bold mb-4">Support the Wisdom X Stroke Foundation</h2>
        <PayPalButtons
          style={{ layout: "vertical" }}
          createOrder={(data, actions) => {
            if (!actions) {
              console.error("PayPal actions is undefined.");
              return Promise.reject(new Error("PayPal actions is undefined."));
            }

            return actions.order.create({
              intent: "CAPTURE", // Specify the intent for the transaction
              purchase_units: [
                {
                  amount: {
                    currency_code: "USD", // Specify the currency
                    value: "10.00", // Set the donation amount
                  },
                },
              ],
            });
          }}
          onApprove={(data, actions) => {
            if (!actions || !actions.order) {
              console.error("PayPal actions or order is undefined.");
              return Promise.reject(new Error("PayPal actions or order is undefined."));
            }

            return actions.order.capture().then((details) => {
              if (details.payer) {
                alert(
                  `Thank you, ${details.payer.name?.given_name}, for your donation!`
                );
              } else {
                console.warn("Payer details are missing in the response.");
                alert("Thank you for your donation!");
              }
            });
          }}
          onError={(err) => {
            console.error("PayPal error: ", err);
          }}
        />
      </div>
    </PayPalScriptProvider>
  );
};

export default Donate;
