import React, { useState } from "react";
import {
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
  Navbar,
} from "reactstrap";
import "./navbar.scss";

const NavMenu = () => {
  const [responsive, setResponsive] = useState(false);

  return (
    <div>
      <Navbar color="dark" dark expand="md" fixed="top" className="py-4">
        <p className="fw-bold text-white fs-3">START BOOTSTRAP</p>
        <NavbarToggler
          onClick={function noRefCheck() {
            setResponsive(!responsive);
          }}
        />
        <Collapse navbar className={responsive ? "show" : ""}>
          <Nav className="me-auto" navbar>
            <NavItem>
              <a
                className="nav-link"
                href="#startBootstrap"
                className="fw-bold text-white fs-6 text-decoration-none mx-2"
              >
                PORTFOLIO
              </a>
            </NavItem>
            <NavItem>
              <a
                className="nav-link"
                href="#about"
                className="fw-bold text-white fs-6 text-decoration-none mx-2"
              >
                ABOUT
              </a>
            </NavItem>
            <NavItem>
              <a
                href="#contact"
                className="fw-bold text-white fs-6 text-decoration-none mx-2"
              >
                CONTACT
              </a>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavMenu;
