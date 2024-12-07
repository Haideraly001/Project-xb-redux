import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../store/Slice1";
import { fetchProducts } from "../store/Slice2";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch()
  const gettingProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      });
  };

  useEffect(() => {
    gettingProducts();
    // dispatch(fetchProducts())
  }, [dispatch]);


  const handleCart = (item) => {
    dispatch(addProducts(item))
  }


  // const { data: products, status } = useSelector((state) => state.cart)

  return (
    <div>
      <h1>Redux Project 1 </h1>
      <div className="grid grid-cols-4 bg-slate-100 ">
        {products.length > 0 &&
          products.map((item) => (
            <div key={item.id} class="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
              <img
                src={item.image}
                alt="product image"
                style={{
                  width: "50%",
                  height: "50%",
                  objectFit: "cover",
                  textAlign: "center",
                }}
              />

              <div class="mt-4 px-5 pb-5">
                <a href="#">
                  <h5 class="text-xl tracking-tight text-slate-900">
                    {item.title}
                  </h5>
                </a>
                <div class="mt-2 mb-5 flex items-center justify-between">
                  <p>
                    <span class="text-3xl font-bold text-slate-900">
                      {item.price}
                    </span>
                  </p>
                </div>
                <a
                  class="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                  onClick={() => handleCart(item)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="mr-2 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linejoin="round"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  Add to cart
                </a>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductsPage;
