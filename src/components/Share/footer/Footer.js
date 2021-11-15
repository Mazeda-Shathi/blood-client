import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';


const Footer = () => {
    return (
        <div className="bg-dark text-light mt-5 p-5" >
            <Container>
                <Row>
                    <Col>
                        <h4>contact us</h4>
                        <h6>Phone:01772812831</h6>
                        <h6>Email:konikaorganization@gmail.com</h6>
                        <h6>Office:Road# 222,Rokeya Sharoni,Badda,Dhaka</h6>
                    </Col>

                    <Col className="mt-5">
                        <a className="m-3"> <i class="fab fa-facebook-f"></i></a>
                        <a className="m-3"><i class="fab fa-whatsapp"></i></a>
                        <a className="m-3"><i class="fab fa-instagram"></i></a>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Footer;