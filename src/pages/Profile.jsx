import React from 'react';
import styles from '../CSS/profile.module.css';
import Image from "../assets/user.png"

const Profile = () => {
    return (
        <>
            <div className={styles.desktop5}>
                <div className={styles.desktop5Child} />
                <div className={styles.desktop5Item} />
                <img className={styles.maskGroupIcon} alt="" src={Image} />
                <b className={styles.sanyaGupta}>{`SANYA GUPTA `}</b>
                <div className={styles.bioLoremIpsumContainer}><br />
                    <p className={styles.bio}>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the `}</p>
                </div>
                <p className={styles.bio}>{`Experience `}</p>
                <p
                    className={styles.bio}
                >{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the leader`}</p>
            </div>
            <div>
                <b className={styles.skills}>{`SKILLS `}</b>
                <p className={styles.skillsContent}><br /><br />{`Hey I am a UI/UX designer working really hard for the hackathon named HACKUNICORN and I really hope that our mentors like it and we pass the vibe check!.  I specialize in creating intuitive and engaging user interfaces with a focus on delivering exceptional user experiences.
          With a strong background in UI/UX design principles and extensive experience in front-end development using React,
          I bring creativity, technical expertise, and a passion for delivering high-quality solutions to every project I work on.`}</p>
                <b className={styles.myProjects}>MY PROJECTS</b>
                <p className={styles.projectContent}><br /><br />{`Welcome to the Projects section! Here you will find a compilation of both the projects I initiated and the ones I joined. Each endeavor represents a unique opportunity for me to contribute my skills and knowledge, while also collaborating with talented individuals. As you explore this section, you'll discover an assortment of innovative and impactful initiatives, ranging from personal undertakings to group efforts. These projects showcase my versatility, dedication, and ability to adapt to various team dynamics. I invite you to delve into the details of each project and witness the passion and commitment I bring to the table..`}</p>
            </div>

            <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <div className={styles.frameChild} />
                <div className={styles.frameChild} />
            </div>
            <div className={styles.rectangleGroup}>
                <div className={styles.frameChild} />
                <div className={styles.frameChild} />
                <div className={styles.frameChild} />
            </div>
            <div className={styles.rectangleParent}>
                <div className={styles.frameChild4} />
                <div className={styles.frameChild4} />
                <div className={styles.frameChild4} />
            </div>
            <div className={styles.rectangleGroup}>
                <div className={styles.frameChild4} />
                <div className={styles.frameChild4} />
                <div className={styles.frameChild4} />
            </div>
            <div className={styles.projectDomainParent}>
                <div className={styles.projectDomain}>Project Domain</div>
                <div className={styles.projectDomain}>Project Domain</div>
                <div className={styles.projectDomain}>Project Domain</div>
            </div>
            <div className={styles.projectDomainGroup}>
                <div className={styles.projectDomain}>Project Domain</div>
                <div className={styles.projectDomain}>Project Domain</div>
                <div className={styles.projectDomain}>Project Domain</div>
            </div>
            <div className={styles.projectTitleParent}>
                <div className={styles.projectDomain}>Project Title</div>
                <div className={styles.projectDomain}>Project Title</div>
                <div className={styles.projectDomain}>Project Title</div>
            </div>
            <div className={styles.projectTitleGroup}>
                <div className={styles.projectDomain}>Project Title</div>
                <div className={styles.projectDomain}>Project Title</div>
                <div className={styles.projectDomain}>Project Title</div>
            </div>
            <div className={styles.rectangleParent1}>
                <div className={styles.frameChild10} />
                <div className={styles.frameChild10} />
                <div className={styles.frameChild10} />
            </div>
            <div className={styles.rectangleParent2}>
                <div className={styles.frameChild10} />
                <div className={styles.frameChild10} />
                <div className={styles.frameChild10} />
            </div>
            <div className={styles.readMoreParent}>
                <div className={styles.readMore}>Read More</div>
                <div className={styles.readMore}>Read More</div>
                <div className={styles.readMore}>Read More</div>
            </div>
            <div className={styles.readMoreGroup}>
                <div className={styles.readMore}>Read More</div>
                <div className={styles.readMore}>Read More</div>
                <div className={styles.readMore}>Read More</div>
            </div>
            <img className={styles.maskGroupIcon1} alt="" src="/mask-group5@2x.png" />

            <div className={styles.exploreMore}>{`Joined Projects `}</div>


        </>
    );
};

export default Profile;
