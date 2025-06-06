import React, { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Cart.css";

// Lazy load components
const Navbar = lazy(() => import("./Navbar"));
const CartItem = lazy(() => import("./CartItem"));


// this is a Cart Componet of Product to checkout
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="cart">
      <Suspense fallback={<p>Loading Navbar...</p>}>
        <Navbar />
      </Suspense>

      <h1 className="cart-name">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="start-shoping">
          <h1>Your cart is empty.</h1>
          <Link to="/" className="link">
            <button className="shopping-btn">Start Shopping</button>
          </Link>
        </div>
      ) : (
        <div>
          <div>
            <Suspense fallback={<p>Loading Cart Items...</p>}>
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </Suspense>
          </div>

          <div className="checkout-div">
            <div className="card-checkout-div">
              <div className="cart-amout">
                <h2>Total: {cartItems.length}</h2>
                <h2>Price: ${totalPrice.toFixed(2)}</h2>
              </div>
              <Link to="/checkout" className="checkout-link">
                <div className="cart-check">
                  {/* // process to check out  */}
                  <button>Process To Checkout</button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
