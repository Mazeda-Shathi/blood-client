import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { MenuItem, Select, Typography, Button, InputLabel, FormControl, Modal } from '@mui/material';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import Button from '@restart/ui/esm/Button';
import Navigation from "../../components/Share/Navigation/Navigation"
import DatePicker from '@mui/lab/DatePicker';
import { useNavigate } from 'react-router-dom';
const RequestForBlood = () => {
    const navigate = useNavigate()
    const date = new Date();
    const [requestInfo, setRequestInfo] = React.useState({ bloodNeededDate: date });
    // console.log(date);
    const handleInputBlur = (e) => {
        const type = e.target.name;
        const value = e.target.value;
        const newInfo = { ...requestInfo };
        newInfo[type] = value;
        setRequestInfo(newInfo);
        console.log(requestInfo);
    }
    //date

    const handleRequestSubmit = e => {
        fetch('http://localhost:4000/request', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestInfo)
        })
            .then(response => response.json())
            .then(data => {
                alert(data.sqlMessage ? data.sqlMessage : "We have received your request for blood. We will try to manage Donor as soon as possible. Stay connected with Kanika Blood Organisation for further Details.Thanks in advance.")
                if (!data.sqlMessage) {
                    navigate("/home")
                }
            })
        e.preventDefault();

    }
    return (
        <div>


            <Navigation />
            <Typography variant="h4" gutterBottom component="div"
                sx={{ mt: 5, pt: 5, color: "red" }}>
                Blood Request Form.Please Give Your patient's information
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
                    <TextField required
                        onBlur={handleInputBlur}
                        name="age"
                        id="outlined-disabled"
                        label="Age"

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
                    <FormControl required style={{ width: '50%', marginTop: '18px' }} >
                        <InputLabel id="demo-simple-select-label">Blood Group</InputLabel>
                        <Select required
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={requestInfo.bloodgroup}
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
                            label="Blood Needed Date"
                            value={requestInfo.bloodNeededDate}
                            name="bloodNeededDate"
                            onChange={(newValue) => {
                                const newInfo = { ...requestInfo }
                                newInfo['bloodNeededDate'] = newValue;
                                console.log(newInfo);
                                setRequestInfo(newInfo);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>

                    <br />
                    <TextField
                        onBlur={handleInputBlur}
                        required
                        name="upozila"
                        id="outlined-required"
                        label="Upazila"
                    />
                    <br />
                    <TextField
                        onBlur={handleInputBlur}
                        required
                        name="zila"
                        id="outlined-required"
                        label="Zilla"
                    />
                    <br />

                    <TextField
                        onBlur={handleInputBlur}
                        required
                        name="medical_name"
                        id="outlined-required"
                        label="Medical Name"
                    />
                    <br />
                    <TextField
                        onBlur={handleInputBlur}
                        required
                        name="medical_area"
                        id="outlined-required"
                        label="Medical Area"
                    />
                    <br />
                    <TextField
                        onBlur={handleInputBlur}
                        required
                        name="medical_upozila"
                        id="outlined-required"
                        label="Medical Upazila"
                    />
                    <br />

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

                    <Button variant="contained" type="submit" onClick={handleRequestSubmit}>Submit</Button>
                </div>

            </Box>
        </div>
    );
}
export default RequestForBlood;