import { Navbar, Container, Nav } from "react-bootstrap";

export default function AppNavbar({ user }) {
  return (
    <Navbar bg="light">
      <Container>
        <Navbar.Brand href="#">Instaclone</Navbar.Brand>
        <Nav className="ms-auto">
          {user && <span>Logged in as: {user.email}</span>}
        </Nav>
      </Container>
    </Navbar>
  );
}