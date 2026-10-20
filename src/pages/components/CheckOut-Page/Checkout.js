import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import BuyerInfo from "./Checkout-page-buyer/BuyerInfo";
import BillingInfo from "./Checkout-page-billing/BillingInfo";
import Link from "next/link";
import Image from "next/image";

const Checkout = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="container">
        <div className="row py-5">
          <div className="col-12">
            <div className="text-center Checkout-Page-Main-Heading">
              <h1>Checkout</h1>
            </div>
          </div>
        </div>
        <div className="row py-3">
          <div className="col-5">
            <div className="text-center d-flex justify-content-end align-items-center check-out-page-numbers">
              <p>1</p>
              <Link href="/components/AddToCart-Page/AddToCart">
                <h2>Cart</h2>
              </Link>
            </div>
          </div>
          <div className="col-2 d-flex justify-content-center align-items-center">
            <div className="text-center ">
              <Image src="/pics_svgs/Line2.svg" alt="Description of the image" width={150} height={30} />
            </div>
          </div>
          <div className="col-5">
            <div className="text-center d-flex justify-content-start align-items-center check-out-page-numbers number-2">
              <p>2</p>
              <Link href="/components/CheckOut-Page/Checkout">
              <h2>Checkout</h2>
              </Link>
            </div>
          </div>
        </div>

        <div>
          <div className="row py-4">
            <div className="col-12 col-md-8 ">
              <BuyerInfo />
            </div>
            <div className="col-12 col-md-4">
              <BillingInfo />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
