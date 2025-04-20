import Appp from "./components/Appp"
import Header from "./components/Header"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";

const App = () => {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={ <Appp /> } />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </>
    </Router>
  );
}

export default App
