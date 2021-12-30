import React from 'react';
import img1 from "../Share/Navigation/blood2.jpg"
import img2 from '../about/donors.jpg'
import img3 from '../about/user.jpg'
import "../about/about.css"
import { Container } from 'react-bootstrap';
const KnowMore = () => {
    return (
        <Container id="about">
            <div className="pt-5 mt-5" id="about">
                <h2>Explore Us</h2>
                <div className="d-grid">
                    <div className="h-50 d-flex">
                        <img src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t39.30808-6/251493407_3077046205904311_4046519506592212512_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=b9115d&_nc_eui2=AeEcVOcP0MBEHOSf7iYa9sByY-p1uVP4rXVj6nW5U_itdaTJlMTU-g6_7MWr0-ec26UpzfAx_RaVUK5GtpqhPu28&_nc_ohc=_mxKZXcqKpoAX_FAfsD&_nc_ht=scontent.fcgp7-1.fna&oh=00_AT8CQh6FfyxS0gNtQMRcpL9SL-1ZOgeYysK7jFMU9gPueA&oe=61D2161D" className="img" alt="" style={{ width: '350px' }} />
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