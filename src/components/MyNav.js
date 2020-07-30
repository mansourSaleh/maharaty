import React from "react";

function MyNav() {
  return (
    <header className="fixed-top d-flex align-items-center header-transparent">
      <div className="container d-flex align-items-center">
        <div className="mr-auto">
          {/* <a href="index.html"><img src="assets/img/nameARW.png" alt="" className="img-fluid d-flex" ></a> */}
        </div>

        <nav className="nav-menu d-none d-lg-block">
          <ul style={{ direction: "rtl" }}>
            <li >
              <a href="index.html">الرئيسية</a>
            </li>
            <li>
              <a href="#about">مهاراتي</a>
            </li>
            <li>
              <a href="#features">البرامج</a>
            </li>
            <li>
              <a href="#contact">تواصل معنا</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default MyNav;
