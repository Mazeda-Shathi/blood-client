
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import React from 'react';
import Navigation from '../Share/Navigation/Navigation';
import { Table } from 'react-bootstrap';

const Donor = () => {

    return (

        <div>
            <Navigation></Navigation>
            <Table>
                <tbody>
                    <h2 className="pt-5 mt-5">Profile</h2>
                    <tr>Name:</tr>
                    <tr>Date of Birth:</tr>
                    <tr>Gender:</tr>
                    <tr>Blood Group</tr>
                    <tr>Address:</tr>
                    <tr>Phone:</tr>
                    <tr>Email:</tr>
                    <Button variant="contained" type="submit">Update</Button>
                </tbody>
            </Table>
        </div>
    );
};

export default Donor;