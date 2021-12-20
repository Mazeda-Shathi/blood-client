
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
    const handleProcess = request => {
        const date = new Date();
        fetch(`http://localhost:3001/request?date=${date}&&email=${request.email}`, {
            method: 'PUT',

        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    const handleDelete = id => {
        fetch(`http://localhost:3001/request/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
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
                                <td>{request.processDate ? "Processed" : "Pending"}</td>
                                <td> <Button onClick={() => handleProcess(request)} variant="contained" style={{ backgroundColor: 'black' }} type="submit">Process</Button></td>
                                <td><Button variant="contained" style={{ backgroundColor: 'black' }} type="submit" onClick={() => handleDelete(request.id)}>Delete</Button></td>
                            </tr>
                        )}

                    </tbody>
                </Table>
            </div>

        </div>
    );
};

export default BloodRequest;