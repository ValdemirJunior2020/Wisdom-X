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
      <section className="text-center mt-8">
        <h3 className="text-2xl font-bold mb-3">Meet the Developer</h3>
        <p className="text-lg mb-6">
          Wisdom X Stroke Foundation was founded by a software developer who
          survived a massive stroke on January 20, 2020, caused by COVID-19.
          Despite doctors predicting he wouldn’t survive, he defied the odds and
          turned his life around. His journey from being a stroke survivor to a
          software developer is a story of resilience, faith, and determination.
        </p>
        <p className="text-lg">
          Now, he is dedicated to helping other stroke survivors by raising
          funds and providing the support they need to rebuild their lives. His
          mission is to give hope to those facing the same challenges he once
          did and to prove that life after a stroke is not just possible, but
          can be extraordinary.
        </p>
      </section>
    </main>
  );
};

export default About;
