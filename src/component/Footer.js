import React from "react";
import "./footer.scss";
import {
  FaDribbble,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="row justify-content-md-center">
        <div className="col-md-3 m-4 mt-5 ">
          <p className="text-center fw-bold fs-5">LOCATION</p>
          <p className="text-center">2215 John Daniel Drive Clark, MO 65243</p>
        </div>
        <div className="col-md-auto m-4 mt-5 ">
          <p className="text-center fw-bold fs-5">AROUND THE WEB</p>
          <p className="text-center">
            <span className="border rounded-circle">
              <FaFacebookF className="m-2" size="20" />
            </span>
            <FaTwitter className="m-2" size="20" />
            <FaLinkedinIn className="m-2" size="20" />
            <FaDribbble className="m-2" size="20" />
          </p>
        </div>
        <div className="col-md-3 m-4 mt-5">
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
