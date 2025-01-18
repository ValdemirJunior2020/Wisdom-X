import React from "react";

const About: React.FC = () => {
  return (
    <main className="container mx-auto my-8 px-4">
      <h2 className="text-3xl font-bold text-center mb-4">About Us</h2>
      <p className="text-lg text-center mb-6">
        At Wisdom X Stroke Foundation, our mission is to support stroke
        survivors and their families by providing resources, guidance, and a
        network of care. We believe in the power of resilience and the
        importance of community.
      </p>
      <section className="text-center">
        <h3 className="text-2xl font-bold mb-3">Our Goals</h3>
        <ul className="list-disc list-inside mx-auto max-w-xl">
          <li>Raise awareness about stroke prevention and recovery.</li>
          <li>Provide financial and emotional support to survivors.</li>
          <li>Foster a community for sharing stories and resources.</li>
          <li>Fund groundbreaking research into stroke treatment.</li>
        </ul>
      </section>
    </main>
  );
};

export default About;
