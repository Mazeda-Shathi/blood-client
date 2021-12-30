import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    BrowserRouter as Router,
    Routes,
    Link,
    Route,

} from "react-router-dom";
import { Outlet, useMatch, useRouteMatch } from 'react-router';
//import UseAuth from '../hook/UseAuth';
import { List, Button } from '@mui/material';
import Navigation from '../Share/Navigation/Navigation';


const drawerWidth = 240;

function Dashboard(props) {
    //  const { admin } = UseAuth()
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    //  let match = useMatch()
    ;

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <List className="dark">
                <Link to="/home" style={{ textDecoration: 'none', color: 'inherit', padding: "10%" }}><Button>Home</Button></Link><br />
                <Link to="makeadmin" style={{ textDecoration: 'none', color: 'black', padding: "20%" }}><Button>Make An Admin</Button></Link><br />
                <Link to="donorlist" style={{ textDecoration: 'none', color: 'black', padding: "10%" }}><Button>Donor List</Button></Link><br />
                <Link to="bloodrequest" style={{ textDecoration: 'none', color: 'black', padding: "10%" }}><Button>Blood Request</Button></Link><br />
                <Link to="donationhistory" style={{ textDecoration: 'none', color: 'inherit', padding: "10%" }}><Button>Donation History</Button></Link><br />
            </List>

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (

        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >

                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Admin
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                <Typography paragraph>

                </Typography>
                <Box>
                    <Outlet></Outlet>
                </Box>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;