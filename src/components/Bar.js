import React from 'react';
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
import { RiGitRepositoryLine } from 'react-icons/ri';

export const Bar = () => {
    return (
        <div>
            <Navbar bg="light" expand="sm">
                <Container>
                    <Navbar.Brand href="/">

                        <RiGitRepositoryLine fontSize={40} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
