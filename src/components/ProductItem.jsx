import { Link } from "react-router-dom"

const ProductItem = ({product}) => {
  return (
    <div className="product-item">
      {/* <Link to={`/product/${product.id}`}>
        <img
          src={product.thumbnail}
          alt={product.title}
          style={{ width: "200px", height: "150px", objectFit: "cover" }}
        />
        <h3>{product.title}</h3>
      </Link> */}
      <img src={product.images}  width="200px" alt="" />
      <p>Price: ${product.price}</p>
      <button onClick={() => alert(`Added ${product.title} to cart`)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductItem;
