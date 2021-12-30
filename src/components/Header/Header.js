import React from 'react';
import { Carousel } from 'react-bootstrap';

import ban1 from "../../components/WhatsApp Image 2021-12-30 at 2.31.49 PM.jpeg"
const Header = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="home img-fluid mt-5 pt-3"
                        src={ban1}
                        alt="First slide"
                        height="100px"
                        width="50%"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                {/* <Carousel.Item>
                    <img
                        className="home"
                        src={ban2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item> */}
                {/* <Carousel.Item>
                    <img
                        className="home"
                        src={ban3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Hill Tracts</h3>
                    </Carousel.Caption>
                </Carousel.Item> */}
            </Carousel>
        </div>
    );
};

export default Header;