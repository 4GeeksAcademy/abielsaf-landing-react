import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import CardCollection from "./card.jsx";
import Footer from "./footer.jsx";

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <Jumbotron />
                <CardCollection />
            </div>
            <Footer />
        </div>
    );
};

export default Home;
