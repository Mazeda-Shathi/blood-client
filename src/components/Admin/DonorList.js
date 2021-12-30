import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';

const DonorList = () => {
    <h2>Donor List</h2>
    const [donor, setDonor] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3001/donors/')
            .then(res => res.json())
            .then(data => setDonor(data))
    }, [])
    return (
        <div className="mt-5 pt-2">
            <h2>Donor List</h2>
            <div className="d-flex border round p-2 m-2">

                <Table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>DOB</th>
                            <th>Blood Group</th>
                            <th>Street</th>
                            <th>Area</th>
                            <th>Upazila</th>
                            <th>Zilla</th>
                            <th>phone</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {donor.map(donor =>

                            <tr>
                                <td>{donor.name}</td>
                                <td>{donor.gender}</td>
                                <td>{donor.dob?.slice(0, 10)}</td>
                                <td>{donor.bloodgroup}</td>

                                <td>{donor.street}</td>
                                <td>{donor.area}</td>
                                <td>{donor.upozila}</td>
                                <td>{donor.zila}</td>
                                <td>{donor.phone}</td>
                                <td>{donor.donor_email}</td>

                            </tr>)}

                    </tbody>
                </Table>
            </div>

        </div>
    );
};

export default DonorList;