import React, { lazy, Suspense } from "react";
import "./Appp.css";

// Lazy load components
const Header = lazy(() => import("./Header"));
const ProductList = lazy(() => import("./ProductList"));
const Footer = lazy(() => import("./Footer"));

const Appp = () => {
  return (
    <div className="appp">
      <Suspense fallback={<p>Loading Header...</p>}>
        <Header />
      </Suspense>

      <Suspense fallback={<p>Loading Products...</p>}>
        <ProductList />
      </Suspense>

      <Suspense fallback={<p>Loading Footer...</p>}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Appp;
