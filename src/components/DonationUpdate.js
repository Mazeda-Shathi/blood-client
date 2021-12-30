import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import { MenuItem, Select, InputLabel, FormControl, Box, Button, Link } from '@mui/material';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import Button from '@restart/ui/esm/Button';
import DatePicker from '@mui/lab/DatePicker';
import { useNavigate } from 'react-router-dom';
const DonationUpdate = () => {
    const date = new Date();
    const navigate = useNavigate();
    const [requestInfo, setRequestInfo] = useState({});
    // const [user, setUser] = useState()
    const handleInputBlur = (e) => {
        const type = e.target.name;
        const value = e.target.value;
        const newInfo = { ...requestInfo };
        newInfo[type] = value;
        setRequestInfo(newInfo);
    }

    const handleSubmit = e => {
        fetch('http://localhost:3001/donationUpdate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestInfo)
        })
            .then(response => response.json())
        console.log(requestInfo);
        fetch(`http://localhost:3001/donationUpdate/${requestInfo.patient_email}`, {
            method: 'DELETE'
        })
            .then(res => res.json)
        e.preventDefault();
        navigate('/admin')
    }
    return (
        <div>
            <h2 className="pt-5 mt-5">Added a New Donation information</h2>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '50%' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    onBlur={handleInputBlur}
                    required
                    id="outlined-required"
                    name="donor_email"
                    label="Donor Email"
                    type="email"
                />
                <br />
                <TextField
                    onBlur={handleInputBlur}
                    required
                    id="outlined-required"
                    name="patient_email"
                    label="Patient Email"
                    type="email"
                />
                <br />
                <FormControl required style={{ width: '50%', marginTop: '18px' }} >
                    <InputLabel id="demo-simple-select-label">Blood Group</InputLabel>
                    <Select required
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={requestInfo.blood}
                        label="Blood"
                        name="bloodgroup"
                        onChange={handleInputBlur}
                    >
                        <MenuItem value="A+">A+</MenuItem>
                        <MenuItem value="B+">B+</MenuItem>
                        <MenuItem value="AB+">AB+</MenuItem>
                        <MenuItem value="O+">O+</MenuItem>
                        <MenuItem value="A-">A-</MenuItem>
                        <MenuItem value="B-">B-</MenuItem>
                        <MenuItem value="AB-">AB-</MenuItem>
                        <MenuItem value="O-">O-</MenuItem>

                    </Select>
                </FormControl>
                <br />
                <LocalizationProvider dateAdapter={AdapterDateFns} >


                    <DatePicker
                        label="Blood Donation Date"
                        value={requestInfo.donation_date}
                        name="donation_date"
                        onChange={(newValue) => {
                            const newInfo = { ...requestInfo }
                            newInfo['donation_date'] = newValue;
                            console.log(newInfo);
                            setRequestInfo(newInfo);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
                <br />

                <Button variant="contained" type="submit" onClick={handleSubmit}>Done</Button>
            </Box>
        </div>
    );
};

export default DonationUpdate;