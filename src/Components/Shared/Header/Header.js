import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <Navbar collapseOnSelect sticky='top' expand="lg" bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to='/'>Shadhin-Photography</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav justify-content-end">
                        <Nav className='ms-auto'>
                            <Nav.Link href="/">Services</Nav.Link>
                            <Nav.Link as={Link} to='blogs'>Blogs</Nav.Link>
                            <Nav.Link as={Link} to='about'>About Me</Nav.Link>
                            <Nav.Link as={Link} to='login'>Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;