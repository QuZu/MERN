import Raect,{Component} from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import tff from "./tff02.png";

function Brand() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
              <img
               src={tff}
               width="30"
               height="30"
               className="d-inline-block align-top"
               alt="tff"
              />{' '}
              REFMES
            </Navbar.Brand>
          </Container>
        </Navbar>
      </>
    );
  }
  export default Brand;