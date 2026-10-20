import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import AllCategories from "../Product_category/all_categories/AllCategories";
import SearchResult from "./SearchResults/SearchResult";

const Search = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="container mt-5">
        <div className="Search-Heading-text p-3 my-3">
          <h1 className="text-center">What are you looking for?</h1>
        </div>
        <div className=" d-flex align-items-center justify-content-center px-3 py-1">
          <div className="col-12 d-flex justify-content-center">
            <div className="Search-Dashboard-Image ">
              <img src="/pics_svgs/Dashboard.svg" alt="" />
            </div>
            <form className="Search-page-form_searchbar " role="search">
              <div className="input-group  ">
                <input
                  className="Search-page-form-control form-control"
                  type="search"
                  placeholder="Search item here"
                  aria-label="Search"
                />
                <Link href="/components/Search-Page/Search">
                  <div className="input-group-append">
                    <span
                      className="input-group-text"
                      id="Search-Page-searchicon"
                    >
                      <FaSearch />
                    </span>
                  </div>
                </Link>
              </div>
            </form>
          </div>
        </div>
        <div>
          <div className="Search-Last-text px-3">
            <h2 className="text-center">Your Lastest Search</h2>
          </div>

          <div className="Search-Last-list-text d-flex align-items-center justify-content-center px-3">
            <p>Smartphone </p>
            <p>Laptops </p> 
            <p>Headphones </p>
          </div>
        </div>
        <div className="my-5">
            <div className="row Search-Responsive-Row">
                <div className="col-12 col-md-4 col-lg-3" id="ProductCategory">
                        <AllCategories />
                    </div>

                    <div className="col-12 col-md-8 col-lg-9 ">
                        <SearchResult />
                    </div>
            </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Search;
