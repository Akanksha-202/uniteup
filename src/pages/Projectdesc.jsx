import { Typography, Button } from '@material-ui/core';
import { useState, useEffect } from 'react';
import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from '../config'; // Import your Firebase configuration
import { useParams } from 'react-router-dom';
import styles from "../CSS/projectdesc.module.css";

const Projectdesc = () => {

    const { projectId } = useParams(); // Get the project ID from the URL
    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        const fetchProjectData = async () => {
            try {
                const projectRef = doc(db, 'projects', projectId); // Use the project ID from the URL
                const projectSnapshot = await getDoc(projectRef);
                if (projectSnapshot.exists()) {
                    setProjectData(projectSnapshot.data());
                }
            } catch (error) {
                console.error('Error fetching project data:', error);
            }
        };

        fetchProjectData();
    }, [projectId]);

    

    return (
        <div className={styles.desktop8}>
            {projectData && (
                <>
                    <div className={styles.desktop8Child} />
                    <Typography variant="h2" className={styles.projectTitle}>{projectData.projectName}</Typography>
                    <div className={styles.desktop8Item} />
                    <div className={styles.desktop8Inner} />
                    <div className={styles.rectangleDiv} />
                    <div className={styles.lastRectangle} />
                    <Typography variant="subtitle1" className={styles.projectDomain}>{projectData.projectDomain}</Typography>
                    <Typography variant="h3" className={styles.projectDescription}>PROJECT DESCRIPTION</Typography>
                    <Typography variant="body1" className={styles.loremIpsumIs}>
                        {projectData.projectDescription}
                    </Typography>
                    <Typography variant="h3" className={styles.requiredMember}>REQUIRED MEMBERS</Typography>
                    <div className={styles.wrapper}>
                        <div className={styles.div}>{projectData.membersRequired}</div>
                    </div>
                    <Typography variant='h3' className={styles.joinedMember}>JOINED MEMBERS</Typography>
                    <div className={styles.NameWrapper}>
                        <Typography variant="body1" className={styles.Name}>{`Name`}</Typography>
                    </div>
                    <Button variant="contained" color="primary" className={styles.joinWrapper}>
                        <Button className={styles.join}>JOIN</Button>
                    </Button>
                    <Button variant="contained" color="secondary" className={styles.cancelWrapper}>
                        <Button className={styles.cancel}>CANCEL</Button>
                    </Button>
                </>
            )}

        </div>
    );
};

export default Projectdesc;