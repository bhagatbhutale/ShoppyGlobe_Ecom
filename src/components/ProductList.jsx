
import useFetchProducts from "../hooks/useFetchProducts";
import ProductItem from "./ProductItem";
import { useSelector } from "react-redux";
import "./ProductList.css";
import Footer from "./Footer";

const ProductList = () => {
  const { products, loading, error } = useFetchProducts();
  const searchTerm = useSelector((state) => state.search.searchTerm);
  const selectedCategory = useSelector(
    (state) => state.filter.selectedCategory
  );

  if (loading) return <h2 className="loading" >Loading Products...</h2>;
  if (error) return <h2>Error : {error}</h2>;

  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "All" ||
        product.category.toLowerCase() === selectedCategory.toLowerCase())
  );

  return (
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


