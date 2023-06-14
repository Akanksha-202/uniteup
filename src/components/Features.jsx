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
          <p className="card-text">Project Discovery: Our website offers a comprehensive project discovery feature that allows users to explore a wide range of tech-related projects.</p>
        </div>

        <div ref={ref} className={`card ${inView ? 'animate-bottom' : ''}`}>
          <img src="https://images.unsplash.com/photo-1628260412297-a3377e45006f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2FydG9vbnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="Card Image" className="card-image" />
          <p className="card-text">Team Formation and Collaboration: We provide a seamless team formation process, allowing users to connect with like-minded individuals and form teams for their projects. Our platform offers communication and collaboration tools such as messaging, discussion forums, and task management systems to facilitate efficient and effective teamwork.</p>
        </div>

        <div ref={ref} className={`card ${inView ? 'animate-right' : ''}`}>
          <img src="https://images.unsplash.com/photo-1628260412297-a3377e45006f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2FydG9vbnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="Card Image" className="card-image" />
          <p className="card-text">Resource Sharing: Our website enables users to share and access valuable resources related to tech projects. Users can upload and share tutorials, code snippets, articles, and other resources, creating a knowledge-sharing environment that helps enhance skills and supports project development.</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
