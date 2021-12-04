import { Alert, TextField } from '@mui/material';
import React from 'react';
import { Button } from '@mui/material';
const MakeAdmin = () => {
    return (
        <div>
            <h2>Make An Admin</h2>
            <form>
                <TextField
                    label="Email"
                    type="email"

                    variant="standard"
                    margin="normal"
                />
                <br />
                <Button type="submit" variant="contained">Make Admin</Button>
                {/* {success && <Alert severity="success">Make admin successfully</Alert>} */}
            </form>
        </div>
    );
};

export default MakeAdmin;