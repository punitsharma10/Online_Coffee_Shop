import React from 'react';
import './App.css';
import "./Component/style.css"
// import Header from './components/Header';
// import Hero from './components/Hero';
// import Product from './components/Product';
// import Footer from './components/Footer';
import Header from './Component/Navbar/Navbar.jsx';
import Product from './Component/Product';
import Hero from './Component/Hero';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <div className="App">
      {/* <Header />
      <Hero />
      <section id="products">
        <h2>Featured Products</h2>
        <Product
          imageSrc="product1.jpg"
          title="Signature Espresso Maker"
          description="Experience the true Italian espresso at home."
        />
        <Product
          imageSrc="product2.jpg"
          title="Moka Express"
          description="The classic stovetop coffee maker loved worldwide."
        />
      </section> */}
      {/* Add more sections/components as needed */}
      <Footer />
    </div>
  );
}

export default App;
