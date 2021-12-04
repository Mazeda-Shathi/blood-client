
import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const BloodRequest = () => {
    <h2>Blood Request List</h2>
    const [request, setrequest] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3001/request')
            .then(res => res.json())
            .then(data => setrequest(data))
    }, [])
    return (
        <div className="mt-5 pt-2">
            <div className="d-flex border round p-2 m-2">
                <Table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Age</th>
                            <th>Blood Group</th>
                            <th>Blood Needed Date</th>
                            <th>Address</th>
                            <th>Phone Number</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {request.map(request =>
                            <tr>
                                <td>{request.name}</td>
                                <td>{request.gender}</td>
                                <td>{request.age}</td>
                                <td>{request.bloodgroup}</td>
                                <td>{request.bloodNeededDate}</td>

                                <td>{request.address}</td>
                                <td>{request.phone}</td>
                                <td>{request.email}</td>
                                <td></td>
                                <td> <Button variant="contained" style={{ backgroundColor: 'black' }} type="submit">Process</Button></td>
                                <td><Button variant="contained" style={{ backgroundColor: 'black' }} type="submit">Delete</Button></td>
                            </tr>
                        )}

                    </tbody>
                </Table>
            </div>

        </div>
    );
};

export default BloodRequest;