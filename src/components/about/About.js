import React from 'react';
import img1 from "../Share/Navigation/blood2.jpg"
import img2 from '../about/donors.jpg'
import img3 from '../about/user.jpg'
import "../about/about.css"
import { Container } from 'react-bootstrap';

const About = () => {
    return (
        <Container id="about">
            <div className="pt-5 mt-5" id="about">
                <h2> About Us</h2>
                <div className="d-grid">
                    <div className="h-50 d-flex">
                        <img src={img1} className="img" alt="" style={{ width: '350px' }} />
                        <div className="m-5 p-5">
                            <h3>Our vission</h3>
                            <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</h6>
                        </div>
                    </div>
                    <div className=" h-50 d-flex">
                        <img src={img2} className="img" alt=""></img>
                        <div className="m-5 p-5">
                            <h3>Donors opinion</h3>
                            <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</h6>
                        </div>
                    </div>
                    <div className=" h-50 d-flex">
                        <img src={img3} className="img" alt=""></img>
                        <div className="m-5 p-5">
                            <h3>Users opinion</h3>
                            <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</h6>
                        </div>
                    </div>
                </div>

            </div>
        </Container>


    );
};

export default About;