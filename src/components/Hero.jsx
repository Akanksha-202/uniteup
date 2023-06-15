import React from 'react';
import '../CSS/hero.css';

const Hero = () => {
    return (
        <>
            <section className="hero-section">
                <div className="container">
                    <div className="row">
                        <div className="col-7">
                            <div className="content">
                                <h1 className="title">UNITEUP</h1>
                                <p className="description">Empowering Collaboration, Building Strong Teams,<br /> consectetur adipiscing elit.<br /> Fusce lobortis auctor metus <br /> a rutrum.</p>
                            </div>
                            <button type="button" class="btn btn-dark">CONTINUE</button>
                        </div>
                        <div className="col-3"></div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
