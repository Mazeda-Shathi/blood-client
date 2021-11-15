import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
// import UseAuth from '../../hook/UseAuth';



const Navigation = () => {
    // const { user, logOut } = UseAuth();
    return (
        <div className="p-2 bg-dark">
            <Navbar bg="dark" variant="dark" fixed="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand as={HashLink} to="/home#home" className=" fs-2">Konika Organization</Navbar.Brand>
                    <Nav className="mx-auto text-light">
                        <Nav.Link as={HashLink} to="/home#home" className=" text-light ">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#about" className=" text-light">About</Nav.Link>
                        <Nav.Link as={HashLink} to="/live" className=" text-light ">Live Blood Camp</Nav.Link>
                        <Nav.Link as={HashLink} to="/search" className=" text-light ">Search</Nav.Link>
                        <Nav.Link as={HashLink} to="/admin" className=" text-light ">Admin</Nav.Link>
                        <Nav.Link as={HashLink} to="/contuct" className=" text-light ">Contuct Us</Nav.Link>
                    </Nav>
                    <Navbar.Toggle />
                    {/* <Navbar.Collapse className="justify-content-end">
                        {user?.email ?
                            <button className="bg-light text-dark" onClick={logOut}>Log Out</button> :
                            <Nav.Link as={HashLink} to="/login" className=" text-light fs-5">Log in</Nav.Link>
                        }
                        <Navbar.Text>
                            <a as={HashLink} to="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse> */}
                </Container>
            </Navbar>
        </div >
    );
};

export default Navigation;