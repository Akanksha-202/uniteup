import React from 'react';
import { useInView } from 'react-intersection-observer';
import '../CSS/features.css';

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className='flex flex-col items-center mt-8'>
      <h1 className="font-semibold hr-text text-center">Features</h1>

      <div className="cards-container">
        <div ref={ref} className={`card ${inView ? 'animate-left' : ''}`}>
          <img src="https://images.unsplash.com/photo-1628260412297-a3377e45006f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2FydG9vbnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="Card Image" className="card-image" />
          <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div ref={ref} className={`card ${inView ? 'animate-bottom' : ''}`}>
          <img src="https://images.unsplash.com/photo-1628260412297-a3377e45006f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2FydG9vbnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="Card Image" className="card-image" />
          <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div ref={ref} className={`card ${inView ? 'animate-right' : ''}`}>
          <img src="https://images.unsplash.com/photo-1628260412297-a3377e45006f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2FydG9vbnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="Card Image" className="card-image" />
          <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
