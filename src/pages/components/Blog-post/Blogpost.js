import React from "react";
import Navbar from "../navbar/Navbar";
import Filtersection from "../Blog-content/filter-section/Filtersection";
import Footer from "../footer/Footer";
import Singleblogpost from "./Single-blog-post/Singleblogpost";

const Blogpost = () => {
  return (
    <>
      {/* <Navbar /> */}

      <div className="container">
        <div className="row mt-5 mb-3">
          <div className="col-lg-12">
            <div className="blogpost-heading-col d-flex justify-content-center">
              <div className="Blog-Main-Section-Adjust-Width text-center">
                <h1 className="blogpost-heading-text">Blog Post</h1>
                <p className="blogpost-paragraph-text mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12 col-md-4 col-lg-3 p-0">
            <Filtersection />
          </div>
          <div className="col-12 col-md-8 col-lg-9 ">
            <Singleblogpost />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Blogpost;
