import React from 'react';
import About from '../about/About';
import Header from '../Header/Header';
import Footer from '../Share/footer/Footer';
import Navigation from "../Share/Navigation/Navigation"
const Home = () => {
    return (
        <div id="home">
            <Navigation></Navigation>
            <Header></Header>
            <About></About>
            <Footer></Footer>
        </div>
    );
};

export default Home;