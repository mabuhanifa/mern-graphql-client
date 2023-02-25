import React from "react";
import logo from "./assets/logo.png";

export default function Header() {
  return (
    <nav className="navbar bg-light mb-4 p-0">
      <div className="container">
        <a className="navbar-brand" href="/">
          <div className="d-flex align-items-center">
            <img src={logo} alt="logo" className="mr-2" />
            <div>MERN GraphQL</div>
          </div>
        </a>
      </div>
    </nav>
  );
}
