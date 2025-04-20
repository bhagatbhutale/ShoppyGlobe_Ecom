import React from 'react'
import { useParams } from 'react-router-dom';
import useFetchProducts from '../hooks/useFetchProducts';
import "./ProductDetail.css"
import { Link } from 'react-router-dom';

const ProductDetail = () => {
  // Product Details 
  // Extracted the id -- > id specific details of product render
const { id } = useParams(); 
const { products, loading, error } = useFetchProducts(); 
const product = products.find((p) => p.id === parseInt(id)); 

if (loading) return <div className="status-msg">Loading product...</div>;
if (error) return <div className="status-msg error">Error: {error}</div>;
if (!product) return <div className="status-msg">Product not found.</div>;



  return (
    <>
      <div className="product-detail-container">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="detail-image"
        />
        <div className="detail-info">
          <h2>{product.title}</h2>
          <p>
            <strong>Description:</strong> {product.description}
          </p>
          <p>
            <strong>Brand:</strong> {product.brand}
          </p>
          <p>
            <strong>Category:</strong> {product.category}
          </p>
          <p>
            <strong>Price:</strong> ${product.price}
          </p>
          <p>
            <strong>Rating:</strong> {product.rating} ⭐
          </p>
          <button
            className="add-to-cart-btn"
            onClick={() => alert(`Added to cart`)}
          >
            Add to Cart
          </button>
        </div>
      </div>
      <Link to="/" >
        <button className="back-btn">Back</button>
      </Link>
    </>
  );
}

export default ProductDetail
