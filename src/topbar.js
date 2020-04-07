import React from "react";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";

const Topbar = () => {
  return (
    <div className="bigdivtop">
      <Navbar bg="white" expand="lg" fixed="top">
        <Navbar.Brand href="#home" style={{paddingLeft:"450px"}}><img className="logo" src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="mr-auto">
          </Nav>
          <Nav style={{paddingRight:"450px"}}>
            <Nav.Link href="#home" style={{color:"#00ccb1"}}>About us</Nav.Link>
            <Nav.Link href="#link">Career</Nav.Link>
            <NavDropdown title="Departements">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> 
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Topbar;

{
  /* <Nav activeKey="/home">
<img className="logo" src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" />
<div className="container">
<div className="row justify-content-end">
<Nav.Item>
  <Nav.Link href="/home">Active</Nav.Link>
</Nav.Item>
<Nav.Item>
  <Nav.Link eventKey="link-1">Link</Nav.Link>
</Nav.Item>
<Nav.Item>
  <Nav.Link eventKey="link-2">Link</Nav.Link>
</Nav.Item>
<Nav.Item>
  <Nav.Link eventKey="disabled" disabled>
    Disabled
  </Nav.Link>
</Nav.Item>
</div>
</div>
</Nav> */
}
