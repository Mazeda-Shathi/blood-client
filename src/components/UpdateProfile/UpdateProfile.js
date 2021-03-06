import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
// import Stack from '@mui/material/Stack';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DatePicker from '@mui/lab/DatePicker';
import Navigation from '../Share/Navigation/Navigation';
import UseAuth from '../hook/UseAuth';
import { useNavigate } from 'react-router-dom';

const UpdateProfile = () => {
    const navigate = useNavigate()
    const { user } = UseAuth();
    const [requestInfo, setRequestInfo] = React.useState({});
    const handleInputBlur = (e) => {
        const type = e.target.name;
        const value = e.target.value;
        const newInfo = { ...requestInfo };
        newInfo[type] = value;
        setRequestInfo(newInfo);
    }


    const handleRequestSubmit = e => {

        fetch(`http://localhost:4000/updateProfile/${user.email}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(donorProfile)
        })
            .then(response => response.json())
            .then(data => {
                alert(data.sqlMessage ? data.sqlMessage : "Your Profile has been Updated")
                if (!data.sqlMessage) {
                    navigate("/donor")
                }
            })
        e.preventDefault();

    }
    console.log(user.email);
    const handleUpdate = e => {
        const newProfile = { ...donorProfile }
        const value = e.target.value
        const name = e.target.name
        newProfile[name] = value
        setDonorProfile(newProfile)
        console.log(value);

    }





    //profile
    const [donorProfile, setDonorProfile] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:4000/donors/${user.email}`)
            .then(res => res.json())
            .then(data => setDonorProfile(data[0]))
    }, [])


    return (
        <div>
            <Navigation />
            <Typography variant="h4" gutterBottom component="div"
                sx={{ mt: 5, pt: 5, color: "red" }}>
                Update Your Profile
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
                    <small>Name</small>
                    <TextField required
                        value={donorProfile.name}
                        onBlur={handleInputBlur}
                        onChange={handleUpdate}
                        name="name"

                        id="outlined-required"

                    />

                    <br />
                    <small>Street</small>
                    <TextField
                        value={donorProfile.street}
                        onBlur={handleInputBlur}
                        onChange={handleUpdate}
                        required
                        name="street"
                        id="outlined-required"

                    />
                    <br />
                    <small>Area</small>
                    <TextField
                        value={donorProfile.area}
                        onBlur={handleInputBlur}
                        onChange={handleUpdate}
                        required
                        name="area"
                        id="outlined-required"

                    />
                    <br />
                    <small>Upozila</small>
                    <TextField
                        value={donorProfile.upozila}
                        onBlur={handleInputBlur}
                        onChange={handleUpdate}
                        required
                        name="upozila"
                        id="outlined-required"

                    />
                    <br />
                    <small>Zilla</small>
                    <TextField
                        value={donorProfile.zila}
                        onBlur={handleInputBlur}
                        onChange={handleUpdate}
                        required
                        name="zila"
                        id="outlined-required"

                    />
                    <br />
                    <small>Phone</small>
                    <TextField
                        value={donorProfile.phone}
                        onChange={handleUpdate}
                        onBlur={handleInputBlur}
                        name="phone"
                        required
                        id="outlined-required"

                    />

                    <br />

                    <Button variant="contained" type="submit" onClick={handleRequestSubmit}>Submit</Button>
                </div>

            </Box >
        </div >
    );
};


export default UpdateProfile;