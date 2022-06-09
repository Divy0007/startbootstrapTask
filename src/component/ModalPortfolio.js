import React from "react";
import { BsFillStarFill } from "react-icons/bs";
import { Button, ModalBody, ModalFooter, ModalHeader, Modal } from "reactstrap";
import { RiCloseLine } from "react-icons/ri";

const ModalPortfolio = ({ modal, toggle, url }) => {
  return (
    <div>
      <Modal
        centered
        fullscreen="sm"
        backdropClassName="modal-drop"
        size="lg"
        isOpen={modal}
        toggle={toggle}
      >
        <ModalHeader toggle={toggle}></ModalHeader>
        <p className="text-center display-3 fw-bold">Card Title</p>
        <div className="d-flex justify-content-center align-items-center">
          <div className="line "></div>
          <BsFillStarFill color="black" size={30} />
          <div className="line "></div>
        </div>
        <img src={url} alt="" className="m-5 rounded-5 mb-4 w-75 mx-auto" />
        <ModalBody>
          <p className="mx-5 px-5 text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          </p>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={toggle} className="mx-auto">
            <RiCloseLine /> close window!
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalPortfolio;
