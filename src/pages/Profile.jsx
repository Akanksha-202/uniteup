import React, { useEffect, useState } from 'react';
import { Typography, IconButton } from '@material-ui/core';
import styles from '../CSS/profile.module.css';
import { Link } from 'react-router-dom';
import Image from "../assets/user.png"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../config';
import { auth } from '../config';

const Profile = () => {
    const [user, setUser] = useState(null);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const usersCollection = collection(db, 'users');
                const q = query(usersCollection, where('email', '==', auth.currentUser.email)); // Filter users by email
                const querySnapshot = await getDocs(q);
                const userData = querySnapshot.docs.map((doc) => doc.data());
                setUser(userData[0]);

                const projectsCollection = collection(db, 'projects');
                const projectsQuery = query(projectsCollection, where('userEmail', '==', auth.currentUser.email)); // Filter projects by user email
                const projectsSnapshot = await getDocs(projectsQuery);
                const userProjects = projectsSnapshot.docs.map((doc) => doc.data());
                setProjects(userProjects);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                fetchUserData();
            }
        });

        return () => unsubscribe(); // Cleanup the listener when the component unmounts
    }, []);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className={styles.desktop5}>
                <div className={styles.desktop5Child} />
                <img className={styles.maskGroupIcon} alt="" src={Image} />
                <Typography variant="h2" className={styles.sanyaGupta}>{user.name}</Typography>
                <div className={styles.bioLoremIpsumContainer}><br />
                    <Typography variant="h4" className={styles.bio}>Experience</Typography>
                    <Typography variant="body1" className={styles.bio}>{user.exp}</Typography>
                </div>
                <div style={{ position: 'absolute', right: '50px' }}>
                    <IconButton color="primary" aria-label="LinkedIn" href={user.link} target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon />
                    </IconButton>
                    <IconButton color="primary" aria-label="Gmail" href={`mailto:${user.email}`}>
                        <MailIcon />
                    </IconButton>
                </div>
            </div>
            <div>
                <Typography variant="subtitle1" className={styles.skills}>Bio</Typography>
                <Typography variant="body1" className={styles.skillsContent}><br /><br />{user.bio}</Typography>
                <Typography variant="subtitle1" className={styles.myProjects}>MY PROJECTS</Typography>
            </div>

            {projects.map((project) => (
                <div className={styles.squareDivContainer} key={project.id}>
                    <div className={styles.squareDiv}>
                        <div className={styles.domainTitle}>
                            <span>{project.projectDomain}</span>
                        </div>
                        <div
                            className={styles.readMoreHalf}
                            style={{ backgroundColor: '#121421' }}
                        >
                            <span className={styles.projectTitle}>{project.projectName}</span>
                            <Link to={`/desc/${project.id}`} className={styles.readMoreButton}>
                                Read More
                            </Link>
                        </div>
                    </div>
                </div>
            ))}

            <img className={styles.maskGroupIcon1} alt="" src="/mask-group5@2x.png" />

            <Typography variant="subtitle1" className={styles.exploreMore}>JOINED PROJECTS</Typography>
            <div className={styles.squareDivContainer2}>
                <div className={styles.squareDiv}>
                    <div className={styles.domainTitle}>
                        <span>projectDomain</span>
                    </div>
                    <div className={styles.readMoreHalf} style={{ backgroundColor: '#121421' }}>
                        <span className={styles.projectTitle}>projectName</span>
                        <Link to={`/`} className={styles.readMoreButton}>
                            Read More
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
