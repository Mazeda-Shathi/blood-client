import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const DonationHistory = () => {
    const [history, sethistory] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3001/history')
            .then(res => res.json())
            .then(data => sethistory(data))
    }, [])
    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Blood Group</th>
                        <th>Address</th>
                        <th>Blood Donation Date</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {history.map(history =>

                        <tr>
                            <td>{history.name}</td>


                            <td>{history.blood}</td>

                            <td>{history.address}</td>
                            <td>{history.bloodDonationDate} </td>

                            <td>{history.phone}</td>
                            <td>{history.email}</td>

                        </tr>)}

                </tbody>
            </Table>
        </div>
    );
};

export default DonationHistory;