import React from "react";
import Donate from "./Donate"; // Correct relative path to Donate.tsx

const DonatePage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Donate to Wisdom X Stroke Foundation</h1>
      <p className="mb-6">
        Your contribution will help us support stroke survivors and promote recovery programs.
      </p>
      <Donate />
    </div>
  );
};

export default DonatePage;
