
import useFetchProducts from "../hooks/useFetchProducts";
import ProductItem from "./ProductItem";
import { useSelector } from "react-redux";
import "./ProductList.css";
import Footer from "./Footer";

// This is the Product list showing in Home Page 
const ProductList = () => {
  const { products, loading, error } = useFetchProducts();
  const searchTerm = useSelector((state) => state.search.searchTerm);
  // filter Category
  const selectedCategory = useSelector(
    (state) => state.filter.selectedCategory
  );

  // Loading and Error show before loading products
  if (loading) return <h2 className="loading" >Loading Products...</h2>;
  if (error) return <h2>Error : {error}</h2>;

  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "All" ||
        product.category.toLowerCase() === selectedCategory.toLowerCase())
  );

  return (

    // map function used to Display a filterProductItem 
    <>
      <div className="product-list-div">
        <h2>Products</h2>
        <div className="product-list">
          {filteredProducts.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductList;


