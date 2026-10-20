import React from "react";
import MyProfileSideBar from "../MyProfile/MyProfileSideBar";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";
import Link from "next/link";


const AccountOrder = () => {
  return (
    <>
    {/* <Navbar /> */}
      <div className="container">
        <div className="Account-Details-form-section-container">
          <div className="row w-100">
            <div className="col-md-3">
              <MyProfileSideBar />
            </div>
            <div className="col-md-9 ">
              <div className="mx-4">
                <h1 className="Account-Details-Heading">Order Details</h1>
                <p className="Account-Details-Paragraph">
                  Your Order Here
                  <Link href="../../Login-Page/Login">
                  <span className="Account-Details-paragraph-span"> login!</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      
    </>
  )
}

export default AccountOrder


