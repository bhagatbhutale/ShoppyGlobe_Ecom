import { Link } from "react-router-dom"
import "./ProductItem.css"
const ProductItem = ({product}) => {
  return (
    <div className="product-card">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="product-image"
      />
      <h3 className="product-title">{product.title}</h3>
      <p className="product-category">Category: {product.category}</p>
      <p className="product-price">Price: ${product.price}</p>

      <div className="button-group">
        <Link to={`/product/${product.id}`}>
          <button className="view-btn">View Details</button>
        </Link>
        <button  className="cart-btn">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
