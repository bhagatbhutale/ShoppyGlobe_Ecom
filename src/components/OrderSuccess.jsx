import React from "react";
import "./OrderSuccess.css";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <div className="order-success-container">
      <h2 className="order-success-heading">
        Your Order is Successfully Placed 🎉
      </h2>
      <Link to="/" className="order-success-link">
        <button className="order-success-btn">Go Back to Shopping</button>
      </Link>
    </div>
  );
};

export default OrderSuccess;
