import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import styles from '../CSS/projectPage.module.css';
import picture from '../assets/project.jpg';
import '../CSS/navbar.css';
import Icon from '../assets/icon.png';
import { db } from '../config';
import { collection, getDocs } from 'firebase/firestore';

const Project = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch projects data from Firestore
    const fetchProjects = async () => {
      try {
        const projectsCollection = collection(db, 'projects');
        const snapshot = await getDocs(projectsCollection);
        const projectData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProjects(projectData);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className={styles.desktop4}>
      <div className="relative">
        <img className={styles.desktop4Child} alt="" src={picture} />
        <div className="absolute top-3 right-9 z-10">
          <div className="text-white font-extrabold text-6xl mr-8 gr-text">PROJECTS</div>
        </div>
      </div>

      <div className={styles.addProjects}>{`ADD PROJECTS `}</div>
      <img className={styles.addLibraryMyIcon1} src={Icon} onClick={() => (window.location.href = '/add')} />

      <div className={styles.squareDivContainer}>
        {projects.map((project) => (
          <div className={styles.squareDiv} key={project.id}>
            <div className={styles.domainTitle}>
              <span>{project.projectDomain}</span>
            </div>
            <div className={styles.readMoreHalf} style={{ backgroundColor: '#121421' }}>
              <span className={styles.projectTitle}>{project.projectName}</span>
              <button className={styles.readMoreButton}>Read More</button>
            </div>
          </div>
        ))}
      </div>

      <nav className="bg-gray-900 navi navbar">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center h-16">
            <div className="flex-shrink-0">
              <span className="text-white font-semibold text-xl mr-8 gr-text">UNITEUP</span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Project;
