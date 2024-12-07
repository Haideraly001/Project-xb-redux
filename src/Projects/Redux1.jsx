import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import ProductsPage from "../components/ProductsPage";
import CartsProduct from "../components/CartsProduct";
import { Provider } from "react-redux";
import { store } from "../store/store";

const Redux1 = () => {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<ProductsPage />} />
            <Route path="/Cart" element={<CartsProduct />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default Redux1;
