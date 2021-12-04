import { Button, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import UseAuth from "../hook/UseAuth";


const LogIn = () => {
    const [logIndata, setLogIndata] = useState({})
    const { logInUser } = UseAuth()
    const location = useLocation()
    const navigate = useNavigate()
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLogIndata = { ...logIndata };
        newLogIndata[field] = value;
        setLogIndata(newLogIndata)
    }
    const handleLogInSubmit = e => {
        logInUser(logIndata.email, logIndata.password, location, navigate)
        e.preventDefault();
    }
    return (
        <Grid item xs={12} md={6} sx={{ mt: 8 }}>
            <Typography variant="subtitle1" gutterBottom component="div">
                Log In
            </Typography>
            <form onSubmit={handleLogInSubmit}>
                <TextField
                    sx={{ width: "75%", m: 1 }}
                    id="standard-basic"
                    label="Your Email"
                    name="email"
                    onChange={handleOnChange}
                    variant="standard"
                />
                <TextField
                    sx={{ width: "75%", m: 1 }}
                    id="standard-basic"
                    label="Your PassWord"
                    type="password"
                    name="password"
                    onChange={handleOnChange}
                    variant="standard"
                />
                <Link to="/register">
                    <Button>New User?Please Register</Button>
                </Link>
                <Button variant="contained" type="submit">Log In</Button>

            </form>
        </Grid>
    );
};
export default LogIn;