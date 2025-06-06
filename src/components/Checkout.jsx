import "./Checkout.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


// this is a check out Page form 
const Checkout = () => {
 const cartItems = useSelector((state) => state.cart.items);
 const totalProduct = cartItems.reduce((sum, item) => sum + item.quantity, 0);
 const totalPrice = cartItems.reduce(
   (sum, item) => sum + item.price * item.quantity,
   0
 );

 // handle Place items 
//  const navigate = useNavigate
//  function handleClick() {
//  navigate("/order-success");
//  }

  return (
    <div>
      <h3 className="product-detail" >Product Details</h3>
      <div className="checkout-container">
        <div className="cart-summary">
          <p>Total Products: {totalProduct}</p>
          <p>Total Price: ${totalPrice.toFixed(2)}</p>
        </div>

        <form className="checkout-form">
          <div className="form-section">
            <h3>Personal Information</h3>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email" required />
          </div>

          <div className="form-section">
            <h3>Shipping Address</h3>
            <input type="text" placeholder="Street Address" required />
            <input type="text" placeholder="City" />
            <input type="text" placeholder="Zip Code" required />
          </div>

          <div className="form-section">
            <h3>Payment Details</h3>
            <input type="text" placeholder="Card Number" />
            <input type="text" placeholder="MM/YY" />
            <input type="text" placeholder="CVV" />
          </div>

          <div className="form-submit">
            <Link to="/order-success">
              <button type="submit">
                Place Order (${totalPrice.toFixed(2)})
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
