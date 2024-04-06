"use client";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export function Header() {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <div className="container">
        <Navbar.Brand href="/">KuralGPT</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Ask</Nav.Link>
            <Nav.Link href="/kural/1">Browse</Nav.Link>
            <Nav.Link href="/kural/search">Search</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
