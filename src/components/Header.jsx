import Navbar from "./Navbar";
import "./Header.css";

// redux used
import { useDispatch } from "react-redux";
import { setCategory } from "../redux/filterSlice";

const Header = () => {
  const dispatch = useDispatch();

  const handleCategoryClick = (category) => {
    dispatch(setCategory(category));
  };

  return (
    <>
      <Navbar />
      <div className="header">
        <div className="header-div">
          <div className="header-category">
            <h2>Category : </h2>
            <button
              onClick={() => handleCategoryClick("All")}
              style={{
                backgroundColor: "#FF8282",
                color: "#fff",
                borderColor: "#e6e6b0",
                transform: "translateY(-2px) scale(1.05)",
              }}
            >
              All
            </button>
            <button onClick={() => handleCategoryClick("beauty")}>
              Beauty
            </button>
            <button onClick={() => handleCategoryClick("fragrances")}>
              Fragrances
            </button>
            <button onClick={() => handleCategoryClick("furniture")}>
              Furniture
            </button>
            <button onClick={() => handleCategoryClick("groceries")}>
              Groceries
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
