import React from "react";
import { BsFillStarFill } from "react-icons/bs";
import "../component/portfolio.scss";

const Portfolio = () => {
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
          <div className="col-md-6 col-lg-4 " key={index}>
            <img
              src={iteam}
              alt=""
              className="img-fluid rounded-3 m-3 d-block mx-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
