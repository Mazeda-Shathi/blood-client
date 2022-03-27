import { Alert, TextField } from '@mui/material';
import React from 'react';
import { Button } from '@mui/material';
const MakeAdmin = () => {
    const admin = (e) => {
        fetch(`http://localhost:4000/admin/${e.target.value}`,
            { method: "PUT" }

        )
            .then(res => res.json())
            .then(data => console.log(data)
            )

    }
    return (
        <div>
            <h2>Make An Admin</h2>
            <form>
                <TextField
                    label="Email"
                    type="email"
                    onBlur={admin}
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