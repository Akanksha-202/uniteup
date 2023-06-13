import React from 'react';
import Layout from './Layout';
import Navbar from './Navbar';
import Hero from './Hero';
import AboutUs from './AboutUs';
import Features from './Features';
import Footer from './Footer';

function Home() {
    return (
        <Layout>

            <Hero />
            <AboutUs />
            <Features />
            <Footer />
        </Layout>
    );
}

export default Home;
