
import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <h2 className="mt-5 pt-3">About Us</h2>
            <div>
                <p>KANIKA is a Voluntarily Blood Donating and Human Welfare Organization.Our work is outlined by our guiding principles, and our history that shapes our morals and ethics. Find out more about what makes us unique, compassionate and dedicated to caring, all over the world.</p>
            </div>
            <div className="mt-5 d-flex justify-content-center">
                <div className="mx-auto"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTK2BX2Xv0Vz7V4a9SaznwwR2iTQRdnE3k0Q&usqp=CAU" alt=""></img></div>

                <div className="mx-auto"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6cK8u-xMCepLCmuwncCMg-TzClP931BK4Bg&usqp=CAU" alt=""></img></div>
            </div>
            <div className="mt-5 row p-5">
                <div className="mt-5 col-lg-6">
                    <img className="w-100" src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t39.30808-6/251749059_3077046279237637_547804973912824109_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=b9115d&_nc_eui2=AeF47JpK8qSsTvy_B15B83cAUQMAB8z9zNhRAwAHzP3M2MDi43KoEJK_Pfe8MDPB4ApSpLj67uRJY8Cz813GEmCw&_nc_ohc=4yRqauANLT4AX9bycZ0&_nc_oc=AQlaDlXM7zKKbnekp9d4iLBff_pZOx7Zp8iCtAWuyTeNRMYuo4iAmBVJ1pnAGp4tBvw&_nc_ht=scontent.fcgp7-1.fna&oh=00_AT-AEW3RH7lAhMG8by6iaBI-q0HU6wI-WL_mx2pSy9TNhw&oe=61D3AAC6" alt=""></img>
                </div >
                <div className="mt-5 col-lg-6 d-flex align-items-center">
                    Each day, thousands of people – people just like you – provide compassionate care to those in need. Our network of generous donors, volunteers and employees share a mission of preventing and relieving suffering, here at home and around the world.

                    We roll up our sleeves and donate time, money and blood. We learn or teach life-saving skills so our communities can be better prepared when the need arises. We do this every day because the Red Cross is needed - every day.
                </div>
            </div>
            <Link to='/knowmore'>  <Button variant="contained" type="submit">Know More</Button></Link>

        </div>
    );
};

export default About;