import React from "react";
import { Link, NavLink } from "react-router-dom";
import Container from "@mui/material/Container";
import logo from "../assets/images/logo.png";

function Navbar(props) {
  return (
    <nav>
      <Container maxWidth="lg" className="d-flex align-center justify-space">
        <Link to={"/"}>
          <img src={logo} alt="" className="logo" />
        </Link>
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"/service"}>Service</NavLink>
          </li>
          <li>
            <NavLink to={"/contacts"}>Contact</NavLink>
          </li>
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;
