import React from 'react';
import { Carousel } from 'react-bootstrap';
import ban1 from "../Share/Navigation/blood 1.jfif"
import ban2 from "../Share/Navigation/blood2.jpg"
const Header = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="home img-fluid"
                        src={ban1}
                        alt="First slide"
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