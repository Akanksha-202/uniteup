import React from 'react';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Features from './../components/Features';
import Footer from '../components/Footer';

function Home() {
    return (
        <>
            <Layout>
                <Hero />
                <AboutUs />
                <Features />
                <Footer />
            </Layout>
        </>
    );
}

export default Home;
