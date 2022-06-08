import React from "react";
import { BsFillStarFill } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import "../component/about.scss";

const About = () => {
  return (
    <div className="about py-5">
      <p className="fw-normal display-3 pt-3 mb-1 text-center text-white">
        ABOUT
      </p>
      <div className="d-flex justify-content-center align-items-center">
        <div className="lineW "></div>
        <BsFillStarFill color="white" size={30} />
        <div className="lineW "></div>
      </div>
      <div className="row width mx-auto">
        <div className=" col-md-6 ">
          <p className="pt-4 fs-5 text-white">
            Freelancer is a free bootstrap theme created by Start Bootstrap. The
            download includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
        </div>
        <div className="col-md-6 ">
          <p className="pt-md-4 fs-5 text-white">
            You can create your own custom avatar for the masthead, change the
            icon in the dividers, and add your email address to the contact form
            to make it fully functional!
          </p>
        </div>
      </div>

      <div className="mt-4 text-center">
        <button type="button" className="btn btn-outline-light btn-lg">
          {<HiDownload size={25} />}
          Free Download!
        </button>
      </div>
    </div>
  );
};

export default About;
