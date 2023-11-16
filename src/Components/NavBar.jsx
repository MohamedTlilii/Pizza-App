import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function NavBar() {
  return (
    <div> 
        <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home">Pizza Chalghoum  </Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Pizza List</Nav.Link>
        <Nav.Link href="#features">About</Nav.Link>
        <Nav.Link href="#pricing">Contact</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  </div>
  )
}

export default NavBar