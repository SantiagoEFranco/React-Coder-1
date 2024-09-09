import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NavBar() {

    const red = {
        color:"red",
    }

  return (
    <>
      <Navbar fixed='top' bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand style={red} href="#home">RPM tienda</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Nosotros</Nav.Link>
            <Nav.Link href="#features">Catalogo</Nav.Link>
            <Nav.Link href="#pricing">Contacto</Nav.Link>
          </Nav>
        </Container>
        <CartWidget/>
      </Navbar>    
      </>
  );
}