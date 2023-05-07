import React from "react";
import Products from "../../pages/product/products/Products";
import Footer from "../footer/Footer";

const Home = () => {
  return (
    <>
      <div className="col-12 text-center mt-4 container">
        <h1 className="fw-semibold">Product</h1>
        <hr />
      </div>
      <Products />
      <Footer />
    </>
  );
};

export default Home;
