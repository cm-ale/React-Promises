
import {Navbar,Nav,Container} from "react-bootstrap";
import {Outlet} from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return(
    <>
   <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Codercio</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link >Precios</Nav.Link>
            <Nav.Link >Marcas</Nav.Link>
            <Nav.Link >Ofertas</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link >Ingresar</Nav.Link>
            <Navbar.Brand ><CartWidget/></Navbar.Brand>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <section>
      <Outlet></Outlet>
    </section>
    </>
  );
}

export default NavBar;