import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { FaUser, FaEye, FaEyeSlash } from "react-icons/fa";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      {/* <Navbar /> */}
      <div className="login-body mt-3">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 py-4">
              <div className="login-form-section-container">
                <div className="formContainer">
                  <h1>Login</h1>
                  <p>Already have an account? Please, login!</p>
                  <div className="inputContainer">
                    <label
                      className="input-field-lable-login-page"
                      htmlFor="nameInput"
                    >
                      Email
                    </label>
                    <div className="input-group">
                      <div className="icon-container-login-page">
                        <FaUser className="icon-login-page" />
                      </div>
                      <input
                        type="text"
                        id="nameInput"
                        className="form-control custom-input-for-login-page"
                        placeholder="email@email.com"
                      />
                    </div>
                  </div>

                  <div className="inputContainer">
                    <label
                      className="input-field-lable-login-page"
                      htmlFor="passwordInput"
                    >
                      Password
                    </label>
                    <div className="input-group">
                      <div className="icon-container-login-page">
                        <FaUser className="icon-login-page" />
                      </div>
                      <input
                        type={showPassword ? "text" : "password"}
                        id="passwordInput"
                        className="form-control custom-input-for-login-page"
                        placeholder="********"
                      />
                      <div className="icon-container-login-page">
                        {showPassword ? (
                          <FaEyeSlash
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            className="icon-login-page-password"
                          />
                        ) : (
                          <FaEye
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            className="icon-login-page-password"
                          />
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 mb-4 text-center">
                    <button className="btn btn-Login-loginbtn  w-100">
                      Login
                    </button>
                  </div>

                  <div>
                    <div className="row login-forget-section d-flex align-items-center">
                      <div className="col-12 col-md-6 p-0">
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input checkbox-lg me-2"
                            type="checkbox"
                            id="termsCheckbox"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="termsCheckbox"
                          >
                            Remember Me
                          </label>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 d-flex justify-content-end align-items-center p-0 Login-Forget-Password-Section">
                        <p className="login-forget-section-text">
                          Forgot password?
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row  login-with-section ">
                    <div className="col text-center justify-content-center align-items-center d-flex">
                      <div className="login-with-section-heading">
                        Login With:
                      </div>

                      <Link href="https://www.instagram.com/">
                        <Image
                          src="/pics_svgs/insta-cu.svg"
                          alt="Description of the image"
                          width={50}
                          height={30}
                          className=" mx-2"
                          style={{
                            filter:
                              "grayscale(100%) sepia(100%) brightness(0.6) hue-rotate(145deg)",
                          }} 
                        />
                      </Link>
                      <Link href="https://www.twitter.com/">
                        <Image
                          src="/pics_svgs/twiter-cs.svg"
                          alt="Description of the image"
                          width={50}
                          height={30}
                          className=" mx-2"
                          style={{
                            filter:
                              "grayscale(100%) sepia(100%) brightness(0.6) hue-rotate(145deg)",
                          }} 
                        />
                      </Link>
                      <Link href="https://www.facebook.com/">
                        <Image
                          src="/pics_svgs/fb-cs.svg"
                          alt="Description of the image"
                          width={50}
                          height={30}
                          className=" mx-2"
                          style={{
                            filter:
                              "grayscale(100%) sepia(100%) brightness(0.6) hue-rotate(145deg)",
                          }} 
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6 py-4">
              <div className="login-form-section-container">
                <div className="formContainer">
                  <h1>Create Account</h1>
                  <p>Don't have an account yet? Register here!</p>

                  <div className="inputContainer mt-4">
                    <label
                      className="input-field-lable-login-page"
                      htmlFor="nameInput"
                    >
                      Email
                    </label>
                    <div className="input-group">
                      <div className="icon-container-login-page">
                        <FaUser className="icon-login-page" />
                      </div>
                      <input
                        type="text"
                        id="nameInput"
                        className="form-control custom-input-for-login-page"
                        placeholder="email@email.com"
                      />
                    </div>
                  </div>


                  <div className="inputContainer mt-4">
                    <label
                      className="input-field-lable-login-page"
                      htmlFor="passwordInput"
                    >
                      Password
                    </label>
                    <div className="input-group">
                      <div className="icon-container-login-page">
                        <FaUser className="icon-login-page" />
                      </div>
                      <input
                        type={showPassword ? "text" : "password"}
                        id="passwordInput"
                        className="form-control custom-input-for-login-page"
                        placeholder="********"
                      />
                      <div className="icon-container-login-page">
                        {showPassword ? (
                          <FaEyeSlash
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            className="icon-login-page-password"
                          />
                        ) : (
                          <FaEye
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            className="icon-login-page-password"
                          />
                        )}
                      </div>
                    </div>
                  </div>


                  <div className="inputContainer mt-4 mb-5">
                    <label
                      className="input-field-lable-login-page"
                      htmlFor="passwordInput"
                    >
                      Confirm Password
                    </label>
                    <div className="input-group">
                      <div className="icon-container-login-page">
                        <FaUser className="icon-login-page" />
                      </div>
                      <input
                        type={showPassword ? "text" : "password"}
                        id="passwordInput"
                        className="form-control custom-input-for-login-page"
                        placeholder="********"
                      />
                      <div className="icon-container-login-page">
                        {showPassword ? (
                          <FaEyeSlash
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            className="icon-login-page-password"
                          />
                        ) : (
                          <FaEye
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            className="icon-login-page-password"
                          />
                        )}
                      </div>
                    </div>
                  </div>



                  <div className="mt-5 mb-5 text-center">
                  <button className="btn btn-Login-loginbtn  w-100">
                  Register
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

export default LoginForm;
