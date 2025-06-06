import React from 'react'
import { useParams } from 'react-router-dom';
import useFetchProducts from '../hooks/useFetchProducts';
import "./ProductDetail.css"
import { Link } from 'react-router-dom';

// Product Details 
const ProductDetail = () => {
  // Extracted the id -- > id specific details of product render
const { id } = useParams(); 
const { products, loading, error } = useFetchProducts(); 
const product = products.find((p) => p.id === parseInt(id)); 

// Loading and error 
if (loading) return <div className="loading">Loading product...</div>;
if (error) return <div className="error">Error: {error}</div>;
if (!product) return <div className="error">Product not found.</div>;



  return (
    <>
      <h2 className="h2">Product Detail</h2>
      <div className="product-detail-container">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="detail-image"
        />
        <div className="detail-info">
          <h2>
            <strong>Product name:</strong> {product.title}
          </h2>
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
          <p>
            <strong>Stocks:</strong> {product.stock}
          </p>
        </div>
      </div>
      <Link to="/">
        <button className="back-btn">Back</button>
      </Link>
    </>
  );
}

export default ProductDetail
