
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Navigation from '../Share/Navigation/Navigation';
import { Table } from 'react-bootstrap';
import UseAuth from '../hook/UseAuth';

const Donor = () => {
    const { user } = UseAuth();
    const [donorProfile, setDonorProfile] = useState({});
    useEffect(() => {
        fetch(`http://localhost:3001/donors/${user.email}`)
            .then(res => res.json())
            .then(data => setDonorProfile(data[0]))
    }, [])
    console.log(donorProfile);
    return (
        <div>
            <Navigation></Navigation>
            <Table>
                <tbody>
                    <h2 className="pt-5 mt-5">Profile</h2>
                    <h4 className="text-danger">Name:<span className="text-dark">{donorProfile?.name}</span></h4>
                    <p>Date of Birth:{donorProfile?.dob}</p>
                    <p>Gender:{donorProfile?.gender}</p>
                    <p>Blood Group:{donorProfile?.bloodgroup}</p>
                    <p>Address:{donorProfile?.adress}</p>
                    <p>Phone:{donorProfile?.phone}</p>
                    <p>Email:{donorProfile?.email}</p>
                    <Button variant="contained" type="submit">Update</Button>
                </tbody>
            </Table>
        </div>
    );
};

export default Donor;