import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import UseAuth from '../../hook/UseAuth';
// import UseAuth from '../../hook/UseAuth';



const Navigation = () => {
    const { user, logOut } = UseAuth();
    // console.log(user);
    return (
        <>
            <div className="p-2 bg-dark">
                <Navbar bg="dark" variant="dark" fixed="top" collapseOnSelect expand="lg">
                    <Container>
                        <Navbar.Brand as={HashLink} to="/home#home" className=" fs-2">Konika Organization</Navbar.Brand>
                        <Nav className="mx-auto text-light">
                            <Nav.Link as={HashLink} to="/home#home" className=" text-light ">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/request" className=" text-light">Request For Blood</Nav.Link>
                            <Nav.Link as={HashLink} to="/registerDonor" className=" text-light ">Register as a donor</Nav.Link>
                            <Nav.Link as={HashLink} to="/donor" className=" text-light ">Donor</Nav.Link>
                            <Nav.Link as={HashLink} to="/admin" className=" text-light ">Admin</Nav.Link>
                            <Nav.Link as={HashLink} to="/about" className=" text-light ">About us</Nav.Link>
                            <Nav.Link as={HashLink} to="/contact" className=" text-light ">Contact Us</Nav.Link>
                        </Nav>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            {user?.email ?
                                <button className="bg-light text-dark" onClick={logOut}>Log Out</button> :
                                <Nav.Link as={HashLink} to="/login" className=" text-light fs-5">Log in</Nav.Link>
                            }
                            <Navbar.Text>
                                <a as={HashLink} to="#login">{user?.displayName}</a>
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div >
        </>
    );
};

export default Navigation;