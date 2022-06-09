import React from "react";
import { BsFillStarFill } from "react-icons/bs";

const ContactMe = () => {
  return (
    <div className="containrer widthW mx-auto mt-5 mx-0" id="contact">
      <p className="fw-normal display-3 mt-5 pt-3 mb-1 text-center ">
        Contact Me
      </p>
      <div className="d-flex justify-content-center align-items-center">
        <div className="line "></div>
        <BsFillStarFill color="black" size={30} />
        <div className="line "></div>
      </div>
      <div className="form">
        <div className="form-floating my-4">
          <input
            type="name"
            className="form-control"
            id="floatingName"
            placeholder="name"
          />
          <label htmlFor="floatingName">Full Name</label>
        </div>
        <div className="form-floating my-4">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating my-4">
          <input
            type="number"
            className="form-control"
            id="floatingNumber"
            placeholder="Phone Number"
          />
          <label htmlFor="floatingNumber">Phone Number</label>
        </div>
        <div className="form-floating my-4">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            style={{ height: "100px" }}
          ></textarea>

          <label htmlFor="floatingTextarea2">Comments</label>
        </div>
        <button className="btn btn-success btn-lg m-3">send</button>
      </div>
    </div>
  );
};

export default ContactMe;
