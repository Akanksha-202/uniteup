import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import styles from '../CSS/addproject.module.css';
import { db,auth } from '../config';
import { collection, addDoc } from 'firebase/firestore';

const Addproject = () => {
  const [projectName, setProjectName] = useState('');
  const [projectDomain, setProjectDomain] = useState('');
  const [membersRequired, setMembersRequired] = useState('');
  const [projectDescription, setProjectDescription] = useState('');

  const handleFormSubmit = async () => {
    try {
      // Get the currently logged-in user
      const currentUser = auth.currentUser;
  
      // Create a reference to the Firebase Firestore collection
      const projectsCollection = collection(db, 'projects');
  
      // Create a new project document
      const newProject = {
        projectName,
        projectDomain,
        membersRequired,
        projectDescription,
        userEmail: currentUser.email, // Store the logged-in user's email
      };
  
      // Store the new project document in the Firestore collection
      await addDoc(projectsCollection, newProject);
  
      // Reset the form fields after successful submission
      setProjectName('');
      setProjectDomain('');
      setMembersRequired('');
      setProjectDescription('');
  
      // Redirect to the desired page
      window.location.href = '/project';
    } catch (error) {
      // Handle any errors that occur during the submission
      console.error('Error storing project:', error);
    }
  };
  

  return (
    <div className={styles.desktop6}>
      <div className={styles.desktop6Child} />
      <b className={styles.addProjects}>ADD PROJECT</b>

      <div className={styles.projectName}>
        <TextField
          label="Project Name"
          variant="outlined"
          value={projectName}
          onChange={(event) => setProjectName(event.target.value)}
        />
      </div>

      <div className={styles.projectDomain}>
        <TextField
          label="Project Domain"
          variant="outlined"
          value={projectDomain}
          onChange={(event) => setProjectDomain(event.target.value)}
        />
      </div>

      <div className={styles.membersRequired}>
        <TextField
          label="Members Required"
          variant="outlined"
          value={membersRequired}
          onChange={(event) => setMembersRequired(event.target.value)}
        />
      </div>

      <div className={styles.projectDescription}>
        <TextField
          label="Project Description"
          variant="outlined"
          multiline
          rows={4}
          value={projectDescription}
          onChange={(event) => setProjectDescription(event.target.value)}
        />
      </div>

      <div>
        <Button
          variant="contained"
          color="secondary"
          className={styles.add}
          onClick={handleFormSubmit}
        >
          ADD
        </Button>
      </div>

      <div>
        <Button variant="contained" color="primary" className={styles.cancel}>
          CANCEL
        </Button>
      </div>
    </div>
  );
};

export default Addproject;
