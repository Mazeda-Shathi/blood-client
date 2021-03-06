
import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import img3 from '../about/konika1.jpg';

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
                    <img className="w-100" src={img3} alt=""></img>
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