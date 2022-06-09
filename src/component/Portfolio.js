import React, { useState } from "react";
import { BsFillStarFill } from "react-icons/bs";
import "../component/portfolio.scss";
import { FaPlus } from "react-icons/fa";
import ModalPortfolio from "./ModalPortfolio.js";

const Portfolio = () => {
  const [modal, setModal] = useState(false);
  const [iteam, setIteam] = useState("");

  const toggle = () => {
    setModal(!modal);
  };

  const img = [
    "https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/cabin.png",

    "https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/cake.png",

    "https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/circus.png",

    "https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/game.png",

    "https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/safe.png",

    "https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/submarine.png",
  ];

  return (
    <div className="container w-sm-75 mb-5">
      <p className="fw-normal display-3 mt-5 pt-3 mb-1 text-center ">
        Portfolio
      </p>
      <div className="d-flex justify-content-center align-items-center">
        <div className="line "></div>
        <BsFillStarFill color="black" size={30} />
        <div className="line "></div>
      </div>

      <div className="row mx-auto mt-3 justify-content-center">
        {img.map((iteam, index) => (
          <div className="col-md-6 col-lg-4" key={index}>
            <div className="main-div">
              <img
                src={iteam}
                alt=""
                className="img-fluid rounded-4 m-3 d-block mx-auto "
              />
              <div
                className="overlay rounded-4"
                onClick={() => {
                  toggle();
                  setIteam(iteam);
                }}
              >
                <FaPlus color="white" size={65} />
              </div>
            </div>
          </div>
        ))}
        <ModalPortfolio modal={modal} toggle={toggle} url={iteam} />;
      </div>

      {/* modal */}
    </div>
  );
};

export default Portfolio;
