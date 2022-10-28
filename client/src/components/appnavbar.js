import Raect,{Component} from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
function Brand() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
              <img
              />{' '}
              REFMES
            </Navbar.Brand>
          </Container>
        </Navbar>
      </>
    );
  }
  export default Brand;