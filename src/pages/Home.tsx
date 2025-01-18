import React from 'react';
import Footer from "../components/Footer";
 // Adjust path as needed
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Wisdom X</h1>
      <div className="coin-container">
        <img
          src="/wisdom-x.png"
          alt="Wisdom X Coin"
          className="flipping-coin"
        />
      </div>
      <button className="donate-button">Donate</button>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
