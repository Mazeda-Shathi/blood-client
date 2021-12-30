import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, Navigate, Outlet } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import UseAuth from '../../hook/UseAuth';
// import UseAuth from '../../hook/UseAuth';



const Navigation = () => {
    const [admin, setAdmin] = useState({});
    const { user, logOut } = UseAuth();
    useEffect(() => {
        fetch(`http://localhost:3001/users/${user?.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data[0]))

    }, [user])
    console.log(user);
    console.log(admin);
    return (
        <>
            <div className="p-2 bg-dark">
                <Navbar bg="dark" variant="dark" fixed="top" collapseOnSelect expand="lg">
                    <Container>
                        <Navbar.Brand as={HashLink} to="/home" className=" fs-2">Kanika Organization</Navbar.Brand>
                        <Nav className="mx-auto text-light">
                            <Nav.Link as={HashLink} to="/home" className=" text-light ">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/request" className=" text-light">Request For Blood</Nav.Link>
                            <Nav.Link as={HashLink} to="/registerDonor" className=" text-light ">Register as a donor</Nav.Link>
                            <Nav.Link as={HashLink} to="/donor" className=" text-light ">Donor</Nav.Link>
                            {user.email && admin?.admin &&
                                <Nav.Link as={HashLink} to="/admin" className=" text-light ">Admin</Nav.Link>
                            }
                            <Nav.Link as={HashLink} to="/about" className=" text-light ">About us</Nav.Link>
                            <Nav.Link as={HashLink} to="/contact" className=" text-light ">Contact Us</Nav.Link>
                        </Nav>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            {user?.email ?
                                <Nav.Link className="bg-light text-dark" onClick={logOut}>Log Out</Nav.Link> :
                                <Nav.Link as={HashLink} to="/login" className=" text-light fs-5">Log in</Nav.Link>
                            }
                            <Navbar.Text>
                                <Link as={HashLink} to="#login">{user?.displayName}</Link>
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div >
        </>
    );
};

export default Navigation;