import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaSearch } from "react-icons/fa";
const SecNav = () => {
  return (
    <>
      <div className="container-fluid mt-4">
        <div className="row d-flex align-items-center">
          <div className="col-lg-2 col-md-4 col-12 SecNav-Logo">
            <Link className="navbar-brand" href="/">
              Tronix
            </Link>
          </div>
          <div className="col-lg-6 col-md-8 col-12 SecNav-Search-Section d-flex">
            {/* <div className="sec_nav_icon_1">
              <img src="/pics_svgs/Dashboard.svg" alt="" />
            </div> */}
            <form className="form_searchbar" role="search">
              <div className="input-group">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <Link href="/components/Search-Page/Search">
                  <div className="input-group-append">
                    <span className="input-group-text" id="searchicon">
                      <FaSearch />
                    </span>
                  </div>
                </Link>
              </div>
            </form>
          </div>

          <div className="col-lg-4 col-md-12 col-12 d-flex align-items-center justify-content-end SecNav-LastRow">
            <div className="row d-flex align-items-center justify-content-end">
              <div className="col-2">
                <Link
                  href="/components/AddToCart-Page/AddToCart"
                  className="sec_nav_icons pe-4"
                >
                  <Image
                    src="/pics_svgs/ShoppingBag.svg"
                    alt=""
                    width={32}
                    height={32}
                  />
                </Link>
              </div>
              <div className="col-2">
                <Link href="/" className="sec_nav_icons pe-5" target="_blank">
                  <Image
                    src="/pics_svgs/email-2.svg"
                    alt=""
                    width={32}
                    height={32}
                  />
                </Link>
              </div>
              <div className="col-3 d-flex align-items-center">
                <Link
                  href="/components/Login-Page/Login"
                  className="sec_nav_btn pe-4"
                >
                  <p className="signin">Sign In</p>
                </Link>
              </div>
              <div className="col-5">
                <Link href="/components/MyAccount/AccountDetails/AccountDetails">
                  <button className="btn text-white" id="btn_signupnav">
                    Sign Up
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecNav;
