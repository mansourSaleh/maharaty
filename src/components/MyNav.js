import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
// import { Link } from 'react-router-dom'
import LogoW from '../assets/img/logo-w.png'
// import LogoG from '../assets/img/logo-g.png'

function MyNav() {
  return (
   
    <Navbar fixed="top" collapseOnSelect expand="lg"  style={{backgroundColor: "#51A196", }} variant="dark">
     
  <Navbar.Brand  to="/"  >
  <img
        src={LogoW}
        width="100"
        height="50"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    {/* <img  src={LogoG}  width="70" height="50" alt="dd"/> */}
  </Navbar.Brand>
 
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
  
      <Nav.Link to="/"  className="font-des text-white">الرئيسية</Nav.Link>
     
     
      <Nav.Link  to="/about"  className="font-des text-white">مهاراتي</Nav.Link>
     
      <NavDropdown className="font-des text-white" active  title="البرامج" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1" className="font-des">للطلاب</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2" className="font-des">للباحثين عن عمل</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3" className="font-des">لأصحاب الأعمال</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4" className="font-des">للجامعات والمعاهد</NavDropdown.Item>
      </NavDropdown>
     
      <Nav.Link  to="/users"  className="font-des text-white">تواصل معنا</Nav.Link>
     
    </Nav>
  
      
   
  </Navbar.Collapse>
</Navbar>

   
  );
}

export default MyNav;
