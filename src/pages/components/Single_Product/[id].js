import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Link from "next/link";
import Rating from "../mid_content/topRatedProducts/Rating";
import { useRouter } from "next/router";

const SingleProduct = () => {
  const router = useRouter();
  const { id } = router.query;

  const [product, setProduct] = useState({});
  // const { id } = useParams();
  useEffect(() => {
    const fetchProduct = async () => {
        try {
          const response = await fetch(`https://fakestoreapi.com/products/${id}`);
          if (!response.ok) {
            throw new Error('Failed to fetch product');
          }
          const data = await response.json();
          setProduct(data);
          console.log("Singleproduct", data);
          // Process the data and render the component
        } catch (error) {
          console.error(error);
          // Handle the error
        }
      };
    
      fetchProduct();
  }, []);

  const handleCart = (product, redirect) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const isProductExist = cart.find(item => item.id === product.id);
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
    if(redirect){
      Navigate('/')
    }
  };

  if (!Object.keys(product).length > 0) return <div>Loading...</div>;
  
  return (
    <>
      {/* <Navbar /> */}
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12 p-4 border">
            <img
              src={product?.image}
              alt=""
              className="imgsingleproduct"
              width={200}
              height={550}
            />
          </div>

          <div className="col-lg-6 col-12 p-4">
            <div className="col-12 d-flex justify-content-start">
            <span>{product["rating"]?.rate} </span>  <Rating />
            </div>
            <div className="product-deatil">
              <h5 className="namesingle">
              {product?.title}
              </h5>
              <p className="price-container">
                <span>{product?.price}</span>
              </p>
            </div>
            <div className="shipment border-bottom">
              <p className="me-4">
                <img
                  src="/pics_svgs/Delivery.svg"
                  width={22}
                  height={22}
                  alt=""
                  className="me-1"
                />
                <span className="headingimg">Free Delivery</span>
              </p>
              <p className="me-4">
                <img
                  src="/pics_svgs/voucher.svg"
                  width={22}
                  height={22}
                  alt=""
                  className="me-1"
                />
                <span className="headingimg">Available Voucher</span>
              </p>
              <p className="me-4">
                <img
                  src="/pics_svgs/Package.svg"
                  width={22}
                  height={22}
                  alt=""
                  className="me-1"
                />
                <span className="headingimg">In Stock</span>
              </p>
            </div>
            <div className="mt-3">
              <h3 className="description">Description</h3>
              <p className="paradescription">
              {product?.description}
              </p>
            </div>
            <div className="product-info smart-form">
              <div className="row">
                <div className="col-md-12  col-sm-6 col-xs-6 d-flex justify-content-end">
                  <button href="#" className="btnaddtocard2 me-2">
                    Chat
                  </button>
                  <button href="#" onClick={() => handleCart(product)} className="btnaddtocard1">
                    Add to cart
                  </button>
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

export default SingleProduct;
