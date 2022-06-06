import React from "react";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavbarBrand,
  NavbarText,
  NavbarToggler,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  Collapse,
  Navbar,
} from "reactstrap";

const NavMenu = () => {
  return (
    <div>
      <Navbar expand="md" color="dark" dark>
        <NavbarBrand className="nav-hadding text-light">
          START BOOTSTRAP
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar className="nav-list">
          {/* <Nav className="me-auto " navbar></Nav> */}
          <NavLink className="m-2 text-light">PORTFOLIO</NavLink>
          <NavLink className="m-2 text-light">ABOUT</NavLink>
          <NavLink className="m-2 text-light">CONTACT</NavLink>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavMenu;
