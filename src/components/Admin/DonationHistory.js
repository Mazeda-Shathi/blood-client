import React from 'react';
import { Table } from 'react-bootstrap';

const DonationHistory = () => {
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
            </Table>
        </div>
    );
};

export default DonationHistory;