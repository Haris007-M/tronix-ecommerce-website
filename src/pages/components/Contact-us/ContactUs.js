import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Contactusformfields from "./contactus-form-fields/Contactusformfields";
import Contactusdetails from "./Contactus-details/Contactusdetails";

const ContactUs = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="container p-2 Contact-Us-Main-Container">
        <h1 className="Contact-us-main-heading">Contact Us</h1>
        <p className="Contact-us-main-paragraph">
          Learn more about our products and services to get a better experience
          in shopping at our website. Please complete this form to get the
          latest information from us. Our Customer Service is available on 24/7.
          The information you provide will be confidential and not shared with
          third parties.
        </p>
        <div className="row py-3">
            <div className="col-12 col-md-7 py-3">
                <Contactusformfields />
                </div>
                <div className="col-12 col-md-5 py-3">
                <Contactusdetails />
                </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
