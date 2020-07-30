import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from 'react-router-dom'
function MyNav() {
  return (
    <Navbar fixed="top" collapseOnSelect expand="lg"  style={{backgroundColor: "#02C39A", }} variant="dark">
      <Link to="/" >
  <Navbar.Brand href="#home" className="font-title">مهاراتي</Navbar.Brand>
  </Link>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
    <Link to="/" >
      <Nav.Link href="#features" className="font-des text-white">الرئيسية</Nav.Link>
      </Link>
      <Link to="/about" >
      <Nav.Link href="#pricing" className="font-des text-white">مهاراتي</Nav.Link>
      </Link>
      <NavDropdown className="font-des text-white" active  title="البرامج" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1" className="font-des">للطلاب</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2" className="font-des">للباحثين عن عمل</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3" className="font-des">لأصحاب الأعمال</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4" className="font-des">للجامعات والمعاهد</NavDropdown.Item>
      </NavDropdown>
      <Link to="/users">
      <Nav.Link href="#deets" className="font-des text-white">تواصل معنا</Nav.Link>
      </Link>
    </Nav>
  
      
   
  </Navbar.Collapse>
</Navbar>
    // <header className="fixed-top d-flex align-items-center header-transparent">
    //   <div className="container d-flex align-items-center">
    //     <div className="mr-auto">
    //       {/* <a href="index.html"><img src="assets/img/nameARW.png" alt="" className="img-fluid d-flex" ></a> */}
    //     </div>

    //     <nav className="nav-menu d-none d-lg-block">
    //       <ul style={{ direction: "rtl" }}>
    //         <li >
    //           <a href="index.html">الرئيسية</a>
    //         </li>
    //         <li>
    //           <a href="#about">مهاراتي</a>
    //         </li>
    //         <li>
    //           <a href="#features">البرامج</a>
    //         </li>
    //         <li>
    //           <a href="#contact">تواصل معنا</a>
    //         </li>
    //       </ul>
    //     </nav>
    //   </div>
    // </header>
  );
}

export default MyNav;
