

import { CircularProgress, Grid, Link, TextField, Typography, Button } from "@mui/material";
import { useState } from "react";
import UseAuth from "../hook/UseAuth";


const Registration = () => {
    const { registerUser, isLoading, user } = UseAuth()
    const [logIndata, setLogIndata] = useState({})
    const handleOnChange = e => {

        const field = e.target.name;
        const value = e.target.value;
        const newLogIndata = { ...logIndata };
        newLogIndata[field] = value;
        setLogIndata(newLogIndata)
    }
    const handleLogInSubmit = e => {
        console.log(logIndata);
        registerUser(logIndata.email, logIndata.password)
        console.log(user);
        e.preventDefault();
    }
    return (
        <Grid item xs={12} md={6} sx={{ mt: 8 }}>
            <Typography variant="subtitle1" gutterBottom component="div">
                Registar
            </Typography>
            {!isLoading &&
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
                    <Link to="/login">
                        <Button>Already Registerd?Please login</Button>
                    </Link>
                    <Button variant="contained" type="submit" onClick={handleLogInSubmit}>Please Register</Button>


                </form>}
            {isLoading && <CircularProgress></CircularProgress>}
        </Grid>
    );
};

export default Registration;