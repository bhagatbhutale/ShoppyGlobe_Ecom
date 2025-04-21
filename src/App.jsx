import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Redux used
import { Provider } from "react-redux";
import store from "./redux/store";

// Lazy-loaded components implemented
const Appp = lazy(() => import("./components/Appp"));
const ProductDetail = lazy(() => import("./components/ProductDetail"));
const Cart = lazy(() => import("./components/Cart"));
const OrderSuccess = lazy(() => import("./components/OrderSuccess"));
const Checkout = lazy(() => import("./components/Checkout"));
const NotFound = lazy(() => import("./components/NotFound"));
const Footer = lazy(() => import("./components/Footer"));

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Suspense
          fallback={<div style={{ textAlign: "center" }}>Loading...</div>}
        >
          <Routes>
            <Route path="/" element={<Appp />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-success" element={<OrderSuccess />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Suspense>
      </Router>
    </Provider>
  );
};

export default App;
