import React, { useEffect, useState } from "react";
import AddToCard from "../add_to_cart_button/AddToCart";
import Rating from "./Rating";
import Link from "next/link";

const Topproducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
      console.log(data);
    };
    fetchProducts();
  }, []);

  const handleCart = (product, redirect) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const isProductExist = cart.find((item) => item.id === product.id);
    if (isProductExist) {
      const updateCart = cart.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
      localStorage.setItem("cart", JSON.stringify(updateCart));
    } else {
      localStorage.setItem(
        "cart",
        JSON.stringify([...cart, { ...product, quantity: 1 }])
      );
    }
    if (redirect) {
      // Navigate("/");
    }
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <h1 className="Top-rated-products-heading my-5">
              Top Rated Product
            </h1>
          </div>
        </div>
        <div className="row-container">
          <div className="row" id="rowtopprocuts">
            {products.map((product) => {
              const { id, title, price, description, category, image } =
                product;
              return (
                <div className="col-lg-3 col-md-4 col-sm-12 mb-3">
                  <div className="card rounded-card" id="cardtopproductlength">
                    <Link
                      href={`/components/Single_Product/${id}`}
                      className="">
                      <img
                        src={image}
                        className="card-img-top top-products-img"
                        alt="..."
                        width={290}
                        height={320}
                      />
                    </Link>
                    <div className="card-body text-center">
                      <p className="product-text mb-0">{title}</p>
                      <p className="product-price-text mb-3">${price}</p>
                      <span>
                        <Rating />
                      </span>
                    </div>
                    <div className="mb-4 d-flex justify-content-center align-items-center">
                      <button
                        href="#"
                        onClick={() => handleCart(product)}
                        className="btnaddtocard1">
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Topproducts;
