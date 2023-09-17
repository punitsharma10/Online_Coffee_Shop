import React from 'react';
import "./style.css"

function Product({ imageSrc, title, description }) {
  return (
    <div className="product">
      <img src={imageSrc} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href="#" className="btn">Shop Now</a>
    </div>
  );
}

export default Product;
