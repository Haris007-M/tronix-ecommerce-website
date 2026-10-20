import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Categories from "./Categories.js/Categories";
import Featured from "./Featured_Brand/Featured";
import ProductList from "./product_list/ProductList";
import AllCategories from "./all_categories/AllCategories";

const ProductCategory = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="container">
        <div className="row mt-5">
          <div className="col-12" id="colcategory">
            <h1 className="text-center categoryheading">All Categories</h1>
            <p className="text-center categorypara">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.{" "}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-3" id="ProductCategory">
            <AllCategories />
          </div>
          <div className="col-9">
            <Categories />

            <ProductList />
            {/* <Featured /> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductCategory;
