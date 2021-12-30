
import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BloodRequest = () => {
    <h2>Blood Request List</h2>
    const [request, setrequest] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3001/request')
            .then(res => res.json())
            .then(data => setrequest(data))

    }, [])
    const handleProcess = request => {
        <input>Donors name</input>

    }
    // const handleDelete = email => {
    //     fetch(`http://localhost:3001/request/${request.email}`, {
    //         method: 'DELETE'
    //     })
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    // }
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

                            <th>Upazila</th>
                            <th>zilla</th>
                            <th>Medical Name</th>
                            <th>Medical Area</th>
                            <th>Medical Upazila</th>

                            <th>Phone Number</th>
                            <th>Email</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {request.map(item =>
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.gender}</td>
                                <td>{item.age}</td>
                                <td>{item.bloodgroup}</td>
                                <td>{item.bloodNeededDate?.slice(0, 10)}</td>

                                <td>{item.upozila}</td>
                                <td>{item.zila}</td>
                                <td>{item.medical_name}</td>
                                <td>{item.medical_area}</td>
                                <td>{item.medical_upozila}</td>
                                <td>{item.phone}</td>
                                <td>{item.email}</td>
                                <td>
                                    <Link to='/admin/donationUpdate'>
                                        <Button onClick={() => handleProcess(item)} variant="contained" style={{ backgroundColor: 'black' }} type="submit">Process</Button>
                                    </Link>
                                </td>

                                {/* <td><Button variant="contained" style={{ backgroundColor: 'black' }} type="submit" onClick={() => handleDelete(item.id)}>Delete</Button></td> */}
                            </tr>
                        )}

                    </tbody>
                </Table>
            </div>

        </div>
    );
};

export default BloodRequest;