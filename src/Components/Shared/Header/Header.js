import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);

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
                            {user?
                            <Nav.Link as={Link} to='/' onClick={()=>signOut(auth)}>Signout</Nav.Link>
                            :
                            <Nav.Link as={Link} to='login'>Login</Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;