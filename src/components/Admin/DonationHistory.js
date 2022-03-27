import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const DonationHistory = () => {
    const [history, sethistory] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/donationUpdate', {
            method: "GET"
        })
            .then(res => res.json())
            .then(data => sethistory(data))
    }, [])
    return (
        <div>
            <h2 className="mt-5"> Donation information</h2>
            <Table>
                <thead>
                    <tr>
                        <th>Donors Email</th>
                        <th>Patient Email</th>
                        <th>Blood Group</th>
                        <th>Blood Donation Date</th>
                    </tr>
                </thead>
                <tbody>
                    {history.map(history =>
                        <tr>
                            <td>{history.donor_email}</td>


                            <td>{history.patient_email}</td>

                            <td>{history.bloodgroup}</td>
                            <td>{history.donation_date?.slice(0, 10)}</td>




                        </tr>)}

                </tbody>
            </Table>
        </div>
    );
};

export default DonationHistory;