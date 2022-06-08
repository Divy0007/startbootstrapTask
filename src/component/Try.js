import React, { useState } from "react";
import {
  Nav,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
  Navbar,
} from "reactstrap";

const Try = () => {
  const [responsive, setResponsive] = useState(false);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler
          onClick={function noRefCheck() {
            setResponsive(!responsive);
          }}
        />
        <Collapse navbar className={responsive ? "show" : ""}>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Try;
