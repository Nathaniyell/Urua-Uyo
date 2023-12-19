import React from "react";
import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import {BsCart2} from "react-icons/bs"
const Navbar = () => {
  return (
    <NavbarBs sticky="top">
      <Container className="bg-white shadow-sm mb-3">
        
        <Nav className="me-auto">
          <Nav.Link to={"/"} as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to={"/about"} as={NavLink}>
            About
          </Nav.Link>
          <Nav.Link to={"/store"} as={NavLink}>
            Store
          </Nav.Link>
        </Nav>
        <Button style={{width: "3rem", height: "3rem", position: "relative"}} variant="outline-primary" className="rounded-circle"><BsCart2 /> <div className="rounded-circle d-flex justify-content-center align-items-center" style={{color: "#fff", width: "1.5rem", height: "1.5rem",position:"absolute", right:0, top: 0, transform:"translate(25% 25%)"}}>0</div></Button>
      </Container>
    </NavbarBs>
  );
};

export default Navbar;
