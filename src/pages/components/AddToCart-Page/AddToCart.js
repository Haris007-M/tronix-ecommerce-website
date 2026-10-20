import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Link from "next/link";
import Image from "next/image";

import { useRouter } from "next/router";
import QuantityCounter from "./QuantityCounter/QuantityCounter";

const AddToCart = () => {
  const [carts, setCarts] = useState([]);
  const [total, setTotal] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    setCarts(cartData);
  }, []);

  useEffect(() => {
    const total = carts.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
    setTotal(total);
  }, [carts]);

  const removeProduct = (id) => {
    const updatedCart = carts.filter((item) => item.id !== id);
    setCarts(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  if (carts.length === 0) {
    return (
      <div className="flex justify-center items-center font-bold text-4xl h-[55vh]">
        Cart Is Empty
      </div>
    );
  }
  return (
    <>
      {/* <Navbar /> */}
      <div className="container">
        <div className="row py-5">
          <div className="col-12">
            <div className="text-center Checkout-Page-Main-Heading">
              <h1>My Cart</h1>
            </div>
          </div>
        </div>
        <div className="row py-3 d-flex justify-content-center">
          <div className="col-5">
            <div className="text-center d-flex justify-content-end align-items-center check-out-page-numbers ">
              <p>1</p>
              <Link href="/components/AddToCart-Page/AddToCart">
                <h2>Cart</h2>
              </Link>
            </div>
          </div>
          <div className="col-2 d-flex justify-content-center align-items-center p-0">
            <div className="text-center Add-To-Cart-Line-Img">
              <Image
                src="/pics_svgs/Line2.svg"
                alt="Description of the image"
                width={150}
                height={30}
              />
            </div>
          </div>
          <div className="col-5 p-0">
            <div className="text-center d-flex justify-content-start align-items-center my-cart-page-numbers number-2 ">
              <p>2</p>
              <Link href="/components/CheckOut-Page/Checkout">
                <h2>Checkout</h2>
              </Link>
            </div>
          </div>
        </div>

        <div>
          <div className="row Add-To-Cart-Main-Row-1">
            <div className="col-12 col-md-7">
              <div>
                <div className="row mb-4">
                  <div className="col-1">
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input checkbox-lg"
                        type="checkbox"
                        id="termsCheckbox"
                      />
                    </div>
                  </div>
                  <div className="col-11">
                    <div className="items-select-col2">
                      <p>Select All</p>
                    </div>
                  </div>
                </div>
                {carts?.map((cart) => {
                  return (
                    <div className="row d-flex align-items-center AddToCart-Items-Row ">
                      <div className="col-1">
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input checkbox-lg"
                            type="checkbox"
                            id="termsCheckbox"
                          />
                        </div>
                      </div>
                      <div className="col-3 px-2">
                        <div className="Add-To-Cart-Responsive-Image">
                          <img
                            src={cart.image}
                            alt="Description of the image"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                      <div className="col-8 px-4 mt-2">
                        <div className="row">
                          <div className="col-12 px-4">
                            <h1 className="items-product-name">
                              {cart.title}
                            </h1>
                          </div>
                        </div>
                        <div className="row py-3 px-4 d-flex align-items-center Add-To-Cart-Price-responsive">
                          <div className="col-9 px-4">
                            <div className="row p-0">
                              <p className="items-product-price p-0">
                                {cart.price}
                              </p>
                            </div>
                            <div className="row p-0">
                              <QuantityCounter
                                carts={carts}
                                setCarts={setCarts}
                                cart={cart}
                              />
                            </div>
                          </div>

                          <div className="col-3 d-flex justify-content-end Add-To-Cart-Cross-Img">
                            <Image
                              src="/pics_svgs/cross.svg"
                              alt="Description of the image"
                              width={24}
                              height={24}
                              onClick={() => removeProduct(cart.id)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-12 col-md-4 py-5 ms-5 Add-To-Cart-Summary-Col">
              <div className="Coupon-container">
                <div className="row">
                  <div className="col-12 d-flex justify-content-center align-items-center">
                    <Image
                      src="/pics_svgs/Coupon.svg"
                      alt="Description of the image"
                      width={36}
                      height={36}
                      className="me-2"
                    />
                    <Link href="/">
                      <p className="p-0 m-0 Coupon-container-paragraph">
                        Have a coupon code? <span className="ms-2">&gt;</span>
                      </p>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="Summary-container mt-4">
                <div>
                  <h1>Summary</h1>
                </div>
                <div className="row mt-3 d-flex align-items-center">
                  <div className="col-9">
                    <p className="p-0 m-0 Summary-container-total">Total</p>
                  </div>
                  <div className="col-3 d-flex justify-content-end">
                    <p className="p-0 m-0 Summary-container-total-price">
                      ${total.toFixed()}
                    </p>
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-12 py-3">
                    <Link href="/components/CheckOut-Page/Checkout">
                      <button className="btn btn-billing-info-checkout  w-100">
                        Checkout
                      </button>
                    </Link>
                  </div>

                  <div className="col-12 py-3">
                    <Link href="/components/Product_category/ProductCategory">
                      <div className="text-center btn-summary-shopping">
                        <h4>Continue Shopping</h4>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AddToCart;
