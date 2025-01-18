import React, { useState } from "react";

const DonationForm: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = useState<string>("paypal");

  const handleDonation = () => {
    switch (selectedMethod) {
      case "paypal":
        window.open(
          "https://www.paypal.com/donate/?hosted_button_id=B7V5QFLMZDB2L",
          "_blank"
        );
        break;
      case "crypto":
        window.open("http://valdemirjunior.cb.id", "_blank");
        break;
      case "zelle":
        alert("Please send your Zelle donation to: infojr.83@gmail.com");
        break;
      default:
        alert("Please select a valid donation method.");
    }
  };

  return (
    <div className="container mx-auto my-8 px-4">
      <h2 className="text-2xl font-bold text-center mb-4">Donate to Our Cause</h2>
      <div className="flex flex-col items-center">
        <label htmlFor="donation-method" className="mb-2 font-medium">
          Select a Donation Method:
        </label>
        <select
          id="donation-method"
          className="border rounded px-4 py-2 mb-4"
          value={selectedMethod}
          onChange={(e) => setSelectedMethod(e.target.value)}
        >
          <option value="paypal">PayPal</option>
          <option value="crypto">Cryptocurrency</option>
          <option value="zelle">Zelle</option>
        </select>
        <button
          onClick={handleDonation}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Donate Now
        </button>
      </div>
    </div>
  );
};

export default DonationForm;
