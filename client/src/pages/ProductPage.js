import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/ProductPage.css";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        setReviews(response.data.reviews || []);
      })
      .catch((error) => console.error(error));
  }, [id]);

  const submitReview = () => {
    const newReview = {
      user: "Anonymous",
      comment: review,
      rating: 5,
    };
    setReviews([...reviews, newReview]);
    setReview(""); // Clear input
  };

  return (
    <div className="product-page">
      {product ? (
        <>
          <div className="product-details">
            <img src={product.image} alt={product.name} />
            <div className="details">
              <h1>{product.name}</h1>
              <p>{product.description}</p>
              <h3>Price: ${product.price}</h3>
            </div>
          </div>
          <div className="reviews">
            <h2>Reviews</h2>
            {reviews.map((r, index) => (
              <div key={index} className="review">
                <strong>{r.user}</strong>: {r.comment}
              </div>
            ))}
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="Add your review..."
            />
            <button onClick={submitReview}>Submit</button>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductPage;
