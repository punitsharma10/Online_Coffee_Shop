import React from 'react';
import "./style.css"

function Hero() {
  return (
    <section id="hero">
      <h1>Welcome to Bialetti</h1>
      <p>Your source for authentic Italian coffee makers.</p>
      <a href="#products" className="btn">View Our Products</a>
    </section>
  );
}

export default Hero;
