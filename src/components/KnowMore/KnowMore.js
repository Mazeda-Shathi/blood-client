import React from 'react';
import img1 from "../Share/Navigation/blood2.jpg"
import img2 from '../about/donors.jpg'
import img3 from '../about/user.jpg'
import img4 from './viss.jpg'
import "../about/about.css"
import { Container } from 'react-bootstrap';
const KnowMore = () => {
    return (
        <Container id="about">
            <div className="pt-5 mt-5" id="about">
                <h2>Explore Us</h2>
                <div className="d-grid">
                    <div className="h-50 d-flex">
                        <img src={img4} className="img" alt="" style={{ width: '350px' }} />
                        <div className="m-5 p-5">
                            <h3>Our vission</h3>
                            <h6>To enhance the well-being of patients in our service area by assuring a reliable supply of the safest possible blood. To make blood donation 100% voluntary without any replacement donor by building individual or institutional alliances.</h6>
                        </div>
                    </div>
                    <div className=" h-50 d-flex">
                        <img src={img2} className="img" alt=""></img>
                        <div className="m-5 p-5">
                            <h3>Donors opinion</h3>
                            <h6>Kanika is a well-known foundation. I am involved with this organization since 2019. Their management system is very well.They respond very quickly and try to manage blood as soon as possible.</h6>
                        </div>
                    </div>
                    <div className=" h-50 d-flex">
                        <img src={img3} className="img" alt=""></img>
                        <div className="m-5 p-5">
                            <h3>Patients opinion</h3>
                            <h6>Kanika is a wonderful organization.I get benefited several times from this organization.</h6>
                        </div>
                    </div>
                </div>

            </div>
        </Container>


    );

};

export default KnowMore;