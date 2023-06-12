import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Features from './components/Features';
import Footer from './components/Footer';


function App() {
  return (
    <Layout>
      <Navbar />
      <Hero />
      <AboutUs />
      <Features />
      <Footer />
    </Layout>
  );
}

export default App;
