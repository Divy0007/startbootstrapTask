import React from "react";
import "./startBootstrap.scss";
import { BsFillStarFill } from "react-icons/bs";
const StartBootstrap = () => {
  return (
    <div
      className="start-bootstrap d-flex justify-content-center align-items-center mx-0"
      id="startBootstrap"
    >
      <div className="mt-5">
        <img
          src="https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/avataaars.svg"
          alt="boy_image"
          className="mx-auto d-block"
          width={250}
        />

        <p className="fw-bold display-2 text-center text-white mt-4">
          START BOOTSTRAP
        </p>
        <div className="d-flex justify-content-center align-items-center">
          <div className="line "></div>
          <BsFillStarFill color="white" size={30} />
          <div className="line "></div>
        </div>

        <p className="text-white fs-5 text-center mt-4">
          Graphic Artist - Web Designer - iilustator
        </p>
      </div>
    </div>
  );
};

export default StartBootstrap;
