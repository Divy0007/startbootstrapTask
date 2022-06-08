import React from "react";
import { BsFillStarFill } from "react-icons/bs";

const ContactMe = () => {
  return (
    <div className="containrer widthW mx-auto mt-5">
      <p className="fw-normal display-3 mt-5 pt-3 mb-1 text-center ">
        Contact Me
      </p>
      <div className="d-flex justify-content-center align-items-center">
        <div className="line "></div>
        <BsFillStarFill color="black" size={30} />
        <div className="line "></div>
      </div>
      <div class="form-floating m-4">
        <input
          type="text"
          class="form-control"
          id="floatingName"
          placeholder="Name"
        />
        <label for="floatingPassword">Name</label>
      </div>
      <div class="form-floating m-4">
        <input
          type="email"
          class="form-control"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating m-4">
        <input
          type="text"
          class="form-control"
          id="floatingPhoneNumber"
          placeholder="PhoneNumber"
        />
        <label for="floatingPassword">Phone Number</label>
      </div>
      <div class="form-floating m-4">
        <textarea
          class="form-control"
          id="floatingPassword"
          placeholder="Password"
          style={{ heigh: "400px" }}
        ></textarea>
        <label for="floatingPassword">Text area</label>
      </div>
    </div>
  );
};

export default ContactMe;
