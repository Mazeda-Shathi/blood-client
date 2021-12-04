import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
// import Stack from '@mui/material/Stack';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DatePicker from '@mui/lab/DatePicker';
import Navigation from '../Share/Navigation/Navigation';


const RegisterAsDonor = () => {
    const [requestInfo, setRequestInfo] = React.useState({});
    const handleInputBlur = (e) => {
        const type = e.target.name;
        const value = e.target.value;
        const newInfo = { ...requestInfo };
        newInfo[type] = value;
        setRequestInfo(newInfo);
    }

    const handleRequestSubmit = e => {
        fetch('http://localhost:3001/donors/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestInfo)
        })
            .then(response => response.json())
            .then(data => console.log(data))
        e.preventDefault();

    }

    return (
        <div>
            <Navigation />
            <Typography variant="h4" gutterBottom component="div"
                sx={{ mt: 5, pt: 5, color: "red" }}>
                Register as Donor
            </Typography>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '50%' },
                }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <TextField required
                        onBlur={handleInputBlur}
                        name="name"
                        id="outlined-required"
                        label="Name"
                    />
                    <br />

                    <FormControl required style={{ width: '50%', marginTop: '18px' }} >
                        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                        <Select required
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={requestInfo.gender}
                            label="Gender"
                            name="gender"
                            onChange={handleInputBlur}
                        >
                            <MenuItem value="male">Male</MenuItem>
                            <MenuItem value="female">Female</MenuItem>
                            <MenuItem value="other">Other</MenuItem>
                        </Select>
                    </FormControl>
                    <br />

                    <LocalizationProvider dateAdapter={AdapterDateFns} >
                        <DatePicker required
                            label="Birth Date"
                            value={requestInfo.date}
                            name="date"
                            onChange={(newValue) => {
                                const newInfo = { ...requestInfo }
                                newInfo['date'] = newValue;
                                console.log(newInfo);
                                setRequestInfo(newInfo);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                    <br />
                    <FormControl required style={{ width: '50%', marginTop: '18px' }} >
                        <InputLabel id="demo-simple-select-label">Blood Group</InputLabel>
                        <Select required
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={requestInfo.blood}
                            label="Blood"
                            name="blood"
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

                    <FormControl required style={{ width: '50%', marginTop: '18px' }} >
                        <InputLabel id="demo-simple-select-label">Have Allergies?</InputLabel>
                        <Select required
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={requestInfo.allergy}
                            label="Allergies"
                            name="allergy"
                            onChange={handleInputBlur}
                        >
                            <MenuItem value="1">Yes</MenuItem>
                            <MenuItem value="0">No</MenuItem>
                        </Select>
                    </FormControl>
                    <br />
                    <FormControl required style={{ width: '50%', marginTop: '18px' }} >
                        <InputLabel id="demo-simple-select-label">Bleeding Disorder?</InputLabel>
                        <Select required
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={requestInfo.bleeding}
                            label="Bleeding"
                            name="bleeding"
                            onChange={handleInputBlur}
                        >
                            <MenuItem value='1'>Yes</MenuItem>
                            <MenuItem value="0">No</MenuItem>
                        </Select>
                    </FormControl>
                    <br />
                    <TextField
                        onBlur={handleInputBlur}
                        required
                        name="address"
                        id="outlined-required"
                        label="Address"
                    />
                    <br />
                    <TextField
                        onBlur={handleInputBlur}
                        name="phone"
                        required
                        id="outlined-required"
                        label="Phone Number"
                    />
                    <br />
                    <TextField
                        onBlur={handleInputBlur}
                        required
                        id="outlined-required"
                        name="email"
                        label="Email"
                        type="email"
                    />
                    <br />
                    <TextField
                        onBlur={handleInputBlur}
                        required
                        id="outlined-required"
                        name="password"
                        label="Password"
                        type="password"
                    />
                    <br />
                    <Button variant="contained" type="submit" onClick={handleRequestSubmit}>Submit</Button>
                </div>

            </Box>
        </div>
    );
};

export default RegisterAsDonor;