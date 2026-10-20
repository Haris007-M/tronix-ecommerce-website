import React from "react";
import SecNav from "./sec_nav/SecNav";
import ThirdNav from "./third_nav/ThirdNav";
import { useRouter } from "next/router";
const Navbar = () => {
  const router = useRouter();  // Initialize useRouter
  
  // Check if the current route matches "/components/Search-Page/Search"
  const isSearchPage = router.pathname === "/components/Search-Page/Search";
  
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* <FirstNav /> */}
            {!isSearchPage && <SecNav />}
            <ThirdNav />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
