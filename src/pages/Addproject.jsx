import React from 'react';
import { TextField, Button } from '@material-ui/core';
import styles from '../CSS/addproject.module.css';

const Addproject = () => {

  return (
    <div className={styles.desktop6}>
      <div className={styles.desktop6Child} />
      <b className={styles.addProjects}>ADD PROJECT</b>

      <div className={styles.projectName}>
        <TextField label="Project Name" variant="outlined" />
      </div>

      <div className={styles.projectDomain}>
        <TextField label="Project Domain" variant="outlined" />
      </div>

      <div className={styles.membersRequired}>
        <TextField label="Members Required" variant="outlined" />
      </div>

      <div className={styles.projectDescription}>
        <TextField
          label="Project Description"
          variant="outlined"
          multiline
          rows={4}
        />
      </div>

      

      <div>
        <Button variant="contained" color="secondary" className={styles.add} onClick={() => window.location.href = '/project'}>
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
