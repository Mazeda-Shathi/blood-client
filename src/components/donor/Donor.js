
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
                    <h4 className="text-danger">Date of Birth:<span className="text-dark">{donorProfile?.dob}</span></h4>
                    <h4 className="text-danger">Gender:<span className="text-dark">{donorProfile?.gender}</span></h4>
                    <h4 className="text-danger">Blood Group:<span className="text-dark">{donorProfile?.bloodgroup}</span></h4>
                    <h4 className="text-danger">Address:<span className="text-dark">{donorProfile?.adress}</span></h4>
                    <h4 className="text-danger">Phone:<span className="text-dark">{donorProfile?.phone}</span></h4>
                    <h4 className="text-danger">Email:<span className="text-dark">{donorProfile?.email}</span></h4>
                    {/* <Button variant="contained" type="submit">Update</Button> */}
                </tbody>
            </Table>
        </div>
    );
};

export default Donor;