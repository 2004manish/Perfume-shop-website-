import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/Homepage.css";

const Homepage = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="homepage">
      <header className="header">
        <div className="header-content">
          <h1>Discover Your Signature Scent</h1>
          <p>Explore our exclusive collection of perfumes crafted for elegance and style.</p>
          <button onClick={() => alert("Explore Now!")}>Shop Now</button>
        </div>
      </header>

      <section className="product-section">
        <h2>Our Exclusive Collection</h2>
        <div className="product-grid">
          {products.map((product) => (
            <div
              key={product._id}
              className="product-card"
              onClick={() => navigate(`/product/${product._id}`)}
            >
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description.substring(0, 50)}...</p>
              <p className="price">${product.price}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Homepage;
