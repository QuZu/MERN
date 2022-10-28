import Raect,{Component} from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {Nav,Button,NavDropdown} from 'react-bootstrap';
import tff from "./tff02.png";
import "../components/navbar.scss";

function Brand() {
    return (
      <>
      <Navbar className="py-4 " bg="light" expand="lg" >
      <Container>
        <Navbar.Brand className="brandText">
        <img
            className="company-logo"
            width={"30px"}
            height={"30px"}
            src={tff}
            alt={"logo"}>
        </img>
          
          {" "}REFMES</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" color="white" >
          <Nav className="me-auto">
            <Nav.Link href="/" className="navText">Home</Nav.Link>
            <Nav.Link href="/matches"  className="navText">Matches</Nav.Link>
            <Nav.Link href="/referees"  className="navText">Referees</Nav.Link>
            <Nav.Link href="/voting"  className="navText">Voting</Nav.Link>
            <NavDropdown
              title={<span  className="navText">Awards</span>}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="/weeklyawards">Weekly Awards</NavDropdown.Item>
              <NavDropdown.Item href="/monthlyawards">Monthly Awards</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/myprofile"  className="navText">My Profile</Nav.Link>
          </Nav>
          <Nav.Link
              href="/login"
              align="center"
              className="loginBtn mr-3"
            >
              <span
                className="uploadBtnText"
              >

            {" "}Sign-In{" "}
              </span>
            </Nav.Link>
            <Nav.Link
              href="/signup"
              align="center"
              className="uploadBtn"
            >
              <span
                className="uploadBtnText"
              >

            Sign-Up
              </span>
            </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </>
    );
  }
  export default Brand;