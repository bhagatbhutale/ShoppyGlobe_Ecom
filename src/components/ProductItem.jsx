import { Link } from "react-router-dom";
import "./ProductItem.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/cartSlice";
import { useState } from "react";

// Product Item Component of in ProductList component
const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const isInCart = cartItems.some((item) => item.id === product.id);

  const [added, setAdded] = useState(false);

const handleCartToggle = () => {
  if (!isInCart) {
    dispatch(addToCart(product));
    setAdded(true);
    setTimeout(() => setAdded(false), 3000); 
  } else {
    dispatch(removeFromCart(product.id));
  }
};

  return (
    <div className="product-card">
      <span className="discount" >{product.discountPercentage}%</span>
      <img
        src={product.thumbnail}
        alt={product.title}
        className="product-image"
      />
      <h3 className="product-title">{product.title}</h3>
      <p className="product-category">Category: {product.category}</p>
      <p className="product-price">Price: ${product.price}</p>

      <div className="button-group">
        {/* // view details of the Product  */}
        <Link to={`/product/${product.id}`}>
          <button className="view-btn">View Details</button>
        </Link>
        {/* // Add to cart btn  */}
        <button className="cart-btn" onClick={handleCartToggle}>
          {isInCart ? "Remove from Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
