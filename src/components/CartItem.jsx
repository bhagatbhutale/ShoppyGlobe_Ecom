import React, { useState, useEffect } from "react";
import "./CartItem.css";
import { useDispatch } from "react-redux";
import { removeFromCart, updateCartItem } from "../redux/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(item.quantity || 1);
  const [totalPrice, setTotalPrice] = useState(item.price);

  useEffect(() => {
    setTotalPrice(item.price * quantity);
    //update the quentity item
    dispatch(updateCartItem({ id: item.id, quantity }));
  }, [quantity, item.price, item.id, dispatch]);

  const handleQuantityChange = (e) => {
    const value = Math.max(1, parseInt(e.target.value) || 1);
    setQuantity(value);
  };

  return (
    <>
      <div className="cart-div">
        <div className="cart-item">
          <img
            src={item.thumbnail}
            alt={item.title}
            className="cart-thumb"
            width="150px"
            height="150px"
          />
          <div className="cart-info">
            <h4>{item.title}</h4>
            <p>Unit Price: ${item.price}</p>
          </div>
          <div className="total-div">
            <h3>
              Total Price: <span>${totalPrice.toFixed(2)}</span>
            </h3>
            <input
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              min="1"
              className="quantity-input"
            />
          </div>
          <button
            className="remove-btn"
            onClick={() => dispatch(removeFromCart(item.id))}
          >
            Remove from Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default CartItem;
