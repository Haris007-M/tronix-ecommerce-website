import React from "react";
import MyProfileSideBar from "../MyProfile/MyProfileSideBar";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";
import Link from "next/link";

const AccountDetails = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="container py-3">
        <div className="Account-Details-form-section-container">
          <div className="row w-100">
            <div className="col-md-3 pe-1 p-0">
              <MyProfileSideBar />
            </div>
            <div className="col-md-9 p-0 ps-1 AccountDetails-Side-Bar">
              <div className="mx-4 ">
                <h1 className="Account-Details-Heading">Account Details</h1>
                <p className="Account-Details-Paragraph">
                  Already have an account? Please,
                  <Link href="../../Login-Page/Login">
                    <span className="Account-Details-paragraph-span">
                      {" "}
                      login!
                    </span>
                  </Link>
                </p>
              </div>

              <div className="mx-4">
                <div className="row">
                  <div className="col-12 col-md-6 py-1">
                    <label
                      className="input-field-lable-contactus"
                      htmlFor="nameInput"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="nameInput"
                      className="form-control custom-input-for-contactus"
                    />
                  </div>
                  <div className="col-12 col-md-6 py-1">
                    <label
                      className="input-field-lable-contactus"
                      htmlFor="nameInput"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="nameInput"
                      className="form-control custom-input-for-contactus"
                    />
                  </div>
                  <div className="col-12 mid-accunt-details-spacing"></div>
                  <div className="col-12 col-md-6 py-1">
                    <label
                      className="input-field-lable-contactus"
                      htmlFor="emailInput"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="emailInput"
                      className="form-control custom-input-for-contactus"
                    />
                  </div>
                  <div className="col-12 col-md-6 py-1">
                    <label
                      className="input-field-lable-contactus"
                      htmlFor="nameInput"
                    >
                      Phone
                    </label>
                    <input
                      type="text"
                      id="nameInput"
                      className="form-control custom-input-for-contactus"
                    />
                  </div>
                  <div className="col-12 py-3 d-flex justify-content-end">
                    <button
                      type="submit"
                      className="btn btn-save-myaccountdetails"
                    >
                      Save
                    </button>
                  </div>
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

export default AccountDetails;
