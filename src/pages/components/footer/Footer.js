import React from "react";
import Newsletter from "./newsLetter/Newsletter";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <Newsletter />
      <footer className="footer">
        <div className="container">
          <div className="row py-4 mt-5 mb-2">
            <div className="col-12 col-lg-6 p-2">
              <h1 className="footer-heading-text">Tronix</h1>
              <p className="footer-paragraph-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
              <div>
                <img
                  src="/pics_svgs/insta.svg"
                  alt="Image"
                  className="img-fluid mr-3 footer-social-icons"
                />
                <img
                  src="/pics_svgs/twiter.svg"
                  alt="Image"
                  className="img-fluid mr-3 footer-social-icons"
                />
                <img
                  src="/pics_svgs/footerfacebook.svg"
                  alt="Image"
                  className="img-fluid mr-3 footer-social-icons"
                />
              </div>
            </div>
            <div className="col-4 col-lg-2 p-2">
              <h1 className="menu-footer-heading">Company</h1>
              <div>
                <nav className="nav flex-column footermenu">
                  <Link href="/components/About-content/About">
                    <span className="menuLink">About</span>
                  </Link>
                  <Link href="/components/Product_category/ProductCategory">
                    <span className="menuLink mt-3">Products</span>
                  </Link>
                  <Link href="/components/Contact-us/ContactUs">
                    <span className="menuLink">Contact</span>
                  </Link>
                  {/* <Link href="/components/Blog-content/Blog">
                    <span className="menuLink">Blog</span>
                  </Link> */}
                  <Link href="/contact">
                    <span className="menuLink">Careers</span>
                  </Link>
                </nav>
              </div>
            </div>
            <div className="col-4 col-lg-2 p-2">
              <h1 className="menu-footer-heading">Information</h1>
              <div>
                <nav className="nav flex-column footermenu">
                  <Link href="/home">
                    <span className="menuLink">Help Center</span>
                  </Link>
                  <Link href="/about">
                    <span className="menuLink">Payment Methods</span>
                  </Link>
                  <Link href="/services">
                    <span className="menuLink">Return &amp; Refund</span>
                  </Link>
                  <Link href="/contact">
                    <span className="menuLink">Privacy Policy</span>
                  </Link>
                </nav>
              </div>
            </div>
            <div className="col-4 col-lg-2 p-2">
              <h1 className="menu-footer-heading ">Contact</h1>
              <div className="contactus-footer">
                <img
                  src="/pics_svgs/phone.svg"
                  alt="Image"
                  className="img-contactus-footer"
                />
                <p className="text-contactus-footer">+1234567890</p>
              </div>

              <div className="contactus-footer">
                <img
                  src="/pics_svgs/emailfooter.svg"
                  alt="Image"
                  className="img-contactus-footer"
                />
                <p className="text-contactus-footer">support@tronix.com</p>
              </div>
            </div>
          </div>

          <div className="row mt-5 ">
            <div className="col-md-6 footer-copyright-section">
              <p className="footer-copyright-text">
                Copyright © 2021 Tronix. All Right Reseved
              </p>
            </div>
            <div className="col-md-6 d-flex justify-content-end footer-copyright-section">
              <div>
                <img
                  src="/pics_svgs/payment.svg"
                  alt="Image"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
