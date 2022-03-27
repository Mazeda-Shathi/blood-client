
import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Navigation from '../Share/Navigation/Navigation';
import { Table } from 'react-bootstrap';
import UseAuth from '../hook/UseAuth';
import { Link } from 'react-router-dom';

const Donor = () => {
    const { user } = UseAuth();
    const [donorProfile, setDonorProfile] = useState({});
    useEffect(() => {
        fetch(`http://localhost:4000/donors/${user.email}`)
            .then(res => res.json())
            .then(data => setDonorProfile(data[0]))
    }, [])
    console.log(donorProfile);


    // for donor donation  
    const [history, sethistory] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:4000/donation/${user.email}`)

            .then(res => res.json())
            .then(data => sethistory(data[0]))
    }, [])

    return (
        <div>
            <Navigation></Navigation>
            <Table>
                <tbody>
                    <h2 className="pt-5 mt-5">Profile</h2>
                    <h4 className="text-danger">Name:<span className="text-dark">{donorProfile?.name}</span></h4>
                    <h4 className="text-danger">Date of Birth:<span className="text-dark">{donorProfile?.dob?.slice(0, 10)}</span></h4>
                    <h4 className="text-danger">Gender:<span className="text-dark">{donorProfile?.gender}</span></h4>
                    <h4 className="text-danger">Blood Group:<span className="text-dark">{donorProfile?.bloodgroup}</span></h4>
                    <h4 className="text-danger">Street:<span className="text-dark">{donorProfile?.street}</span></h4>
                    <h4 className="text-danger">Area:<span className="text-dark">{donorProfile?.area}</span></h4>
                    <h4 className="text-danger">Upazila:<span className="text-dark">{donorProfile?.upozila}</span></h4>
                    <h4 className="text-danger">Zilla:<span className="text-dark">{donorProfile?.zila}</span></h4>
                    <h4 className="text-danger">Phone:<span className="text-dark">{donorProfile?.phone}</span></h4>
                    <h4 className="text-danger mb-5">Email:<span className="text-dark">{donorProfile?.donor_email}</span></h4>

                    <Link to="/updateProfile">
                        <Button variant="outlined" type="submit">Update</Button>
                    </Link>
                </tbody>
            </Table>
            <h3 className='mt-5'>My donation</h3>
            <Table>
                <thead>
                    <tr>
                        <th>Patient Email</th>
                        <th>Blood Donation Date</th>
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <td>{history?.patient_email}</td>
                        <td>{history?.donation_date?.slice(0, 10)}</td>
                    </tr>

                </tbody>
            </Table>
        </div>
    );
};

export default Donor;