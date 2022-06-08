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
        <NavLink className="fw-bold text-white fs-3">START BOOTSTRAP</NavLink>
        <NavbarToggler
          onClick={function noRefCheck() {
            setResponsive(!responsive);
          }}
        />
        <Collapse navbar className={responsive ? "show" : ""}>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/components/" className="fw-bold text-white fs-5">
                Components
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/" className="fw-bold text-white fs-5">
                Components
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/" className="fw-bold text-white fs-5">
                Components
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavMenu;
