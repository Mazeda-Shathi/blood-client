import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';


const Footer = () => {
    return (
        <div className="bg-dark text-light mt-5 pt-3" >
            <Container>
                <Col className="">
                    <a className="m-3" href="https://www.facebook.com/konikadcc"> <i class="fab fa-facebook-f"></i></a>
                    <a className="m-3"><i class="fab fa-whatsapp"></i></a>
                    <a className="mt-3"><i class="fab fa-instagram"></i></a>
                </Col>
                <h6 className='mt-2'>copyright@2020-2021 konika organization</h6>
            </Container>

        </div>
    );
};

export default Footer;