import Link from "next/link";
import React from "react";

const ThirdNav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <button
            className="navbar-toggler right-position"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link
                className="nav-link active pe-3"
                aria-current="page"
                href="/"
              >
                Home
              </Link>

              <Link
                className="nav-link pe-3"
                href="/components/Product_category/ProductCategory"
              >
                Product
              </Link>
              {/* <Link className="nav-link pe-3" href="/components/Blog-content/Blog">
                Blog
              </Link> */}
              <Link
                className="nav-link pe-3"
                href="/components/About-content/About"
              >
                About
              </Link>
              <Link
                className="nav-link "
                href="/components/Contact-us/ContactUs"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default ThirdNav;
