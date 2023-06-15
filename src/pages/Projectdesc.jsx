import { Typography, Button } from '@material-ui/core';
import { useState, useEffect } from 'react';
import { collection, doc, getDoc, updateDoc, arrayUnion, where, query, getDocs } from 'firebase/firestore';
import { db, auth } from '../config';
import { useParams } from 'react-router-dom';
import styles from "../CSS/projectdesc.module.css";

const Projectdesc = () => {

    const { projectId } = useParams(); // Get the project ID from the URL
    const [projectData, setProjectData] = useState(null);
    const [canJoin, setCanJoin] = useState(false); // Track whether the user can join
    const [joinedMembers, setJoinedMembers] = useState([]); // Store joined members' emails

    useEffect(() => {
        const fetchProjectData = async () => {
            try {
                const projectRef = doc(db, 'projects', projectId); // Use the project ID from the URL
                const projectSnapshot = await getDoc(projectRef);
                if (projectSnapshot.exists()) {
                    const data = projectSnapshot.data();
                    setProjectData(data);
                    setCanJoin(data.membersRequired > 0); // Enable Join button if membersRequired > 0
                }
            } catch (error) {
                console.error('Error fetching project data:', error);
            }
        };

        fetchProjectData();
    }, [projectId]);

    useEffect(() => {
        const fetchJoinedMembers = async () => {
            try {
                const usersCollection = collection(db, 'users');
                const joinedMembersSnapshot = await getDocs(query(usersCollection, where('email', 'in', projectData.joinneeEmail)));

                const joinedMembersData = [];
                joinedMembersSnapshot.forEach((doc) => {
                    const userData = doc.data();
                    joinedMembersData.push(userData.email);
                });

                setJoinedMembers(joinedMembersData);
            } catch (error) {
                console.error('Error fetching joined members:', error);
            }
        };

        if (projectData && projectData.joinneeEmail) {
            fetchJoinedMembers();
        }
    }, [projectData]);

    const handleJoin = async () => {
        try {
            const projectRef = doc(db, 'projects', projectId); // Use the project ID from the URL
            const user = auth.currentUser; // Get the current user from Firebase Authentication
            if (user) {
                const { email } = user; // Extract the email from the user object
                await updateDoc(projectRef, {
                    membersRequired: projectData.membersRequired - 1, // Decrement membersRequired by 1
                    joinneeEmail: arrayUnion(email), // Add the logged-in user's email to the joinneeEmail array
                });
                setCanJoin(false); // Disable Join button after successful join
            }
        } catch (error) {
            console.error('Error joining project:', error);
        }
    };



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
                        <div className={styles.NamesContainer}>
                            {joinedMembers.map((email, index) => (
                                <Typography key={index} variant="body1">
                                    {email}
                                </Typography>
                            ))}
                        </div>
                    </div>
                    {canJoin && ( // Display Join button only if canJoin is true
                        <Button variant="contained" color="primary" className={styles.joinWrapper} onClick={handleJoin}>
                            <Button className={styles.join}>JOIN</Button>
                        </Button>
                    )}
                    <Button variant="contained" color="secondary" className={styles.cancelWrapper}>
                        <Button className={styles.cancel}>CANCEL</Button>
                    </Button>
                </>
            )}

        </div>
    );
};

export default Projectdesc;