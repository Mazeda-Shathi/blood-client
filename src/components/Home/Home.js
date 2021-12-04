import React from 'react';
import About from '../about/About';
import Header from '../Header/Header';
// import UseAuth from '../hook/UseAuth';
import Footer from '../Share/footer/Footer';
import Navigation from "../Share/Navigation/Navigation"
const Home = () => {
    // const { user } = UseAuth();
    // console.log(user);
    return (
        <div id="home">
            <Header></Header>
            <About></About>
            <Footer></Footer>
        </div>
    );
};

export default Home;