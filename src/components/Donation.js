import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';


const Donation = () => {
    const [donation, sethistory] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3001/donationUpdate')
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
                    {donation.map(donation =>

                        <tr>
                            <td>{donation.name}</td>


                            <td>{donation.bloodgroup}</td>

                            <td>{donation.address}</td>
                            <td>{donation.processDate?.slice(0, 15)} </td>
                            <td>{donation.phone}</td>
                            <td>{donation.email}</td>

                        </tr>)}

                </tbody>
            </Table>
        </div>
    );
};

export default Donation;