import React, { useEffect, useState } from "react";
import "./footer.scss";
import {
  FaDribbble,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    // <p>hello</p>
    <div className="footer mx-0">
      <div className="row justify-content-md-center">
        <div className="col-12 col-lg-3 m-md-4 mt-5 ">
          <p className="text-center fw-bold fs-5">LOCATION</p>
          <p className="text-center">2215 John Daniel Drive Clark, MO 65243</p>
        </div>
        <div className="col-12  col-lg-auto m-md-4 mt-5 ">
          <p className="text-center fw-bold fs-5">AROUND THE WEB</p>
          <p className="text-center d-flex justify-content-center">
            <span className="icon">
              <FaFacebookF className="" size="20" color="color" />
            </span>
            <span className="icon">
              <FaTwitter className="" size="20" />
            </span>
            <span className="icon">
              <FaLinkedinIn className="" size="20" />
            </span>
            <span className="icon">
              <FaDribbble className="" size="20" />
            </span>
          </p>
        </div>
        <div className="col-12 col-lg-3 m-md-4 mt-5">
          <p className="text-center fw-bold fs-5">ABOUT FREELANCER</p>
          <p className="text-center">
            Freelance is a free to use, MIT licensed Bootstrap theme created by
            Divy Dedakiya.
          </p>
        </div>
      </div>
      <div className="last-footer d-flex justify-content-center align-items-center pt-3 text-white">
        <p>coopyright &#169; your Website 2022</p>
      </div>
    </div>
  );
};

export default Footer;
