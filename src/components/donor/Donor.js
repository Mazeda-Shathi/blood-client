
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
                    <tr>Name:{donorProfile?.name}</tr>
                    <tr>Date of Birth:{donorProfile?.dob}</tr>
                    <tr>Gender:{donorProfile?.gender}</tr>
                    <tr>Blood Group:{donorProfile?.bloodgroup}</tr>
                    <tr>Address:{donorProfile?.adress}</tr>
                    <tr>Phone:{donorProfile?.phone}</tr>
                    <tr>Email:{donorProfile?.email}</tr>
                    <Button variant="contained" type="submit">Update</Button>
                </tbody>
            </Table>
        </div>
    );
};

export default Donor;