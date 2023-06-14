import styles from "../CSS/projectPage.module.css";
import picture from '../assets/project.jpg'
import '../CSS/navbar.css'
import Icon from '../assets/icon.png'

const Project = () => {
  return (
    <div className={styles.desktop4}>
      <div className="relative">
        <img className={styles.desktop4Child} alt="" src={picture} />
        <div className="absolute top-3 right-9 z-10">
          <div className="text-white font-extrabold text-6xl mr-8 gr-text">PROJECTS</div>
        </div>
      </div>

      <div className={styles.addProjects}>{`ADD PROJECTS `}</div>
      <img className={styles.addLibraryMyIcon1} src={Icon} onClick={() => window.location.href='/add'}/>

      <div className={styles.squareDivContainer}>
        <div className={styles.squareDiv}>
          <div className={styles.domainTitle}>
            <span>Project Domain</span>
          </div>
          <div className={styles.readMoreHalf} style={{ backgroundColor: "#121421" }}>
            <span className={styles.projectTitle}>Project Title</span>
            <button className={styles.readMoreButton}>Read More</button>
          </div>
        </div>

        <div className={styles.squareDiv}>
          <div className={styles.domainTitle}>
            <span>Project Domain</span>
          </div>
          <div className={styles.readMoreHalf} style={{ backgroundColor: "#121421" }}>
            <span className={styles.projectTitle}>Project Title</span>
            <button className={styles.readMoreButton}>Read More</button>
          </div>
        </div>

        <div className={styles.squareDiv}>
          <div className={styles.domainTitle}>
            <span>Project Domain</span>
          </div>
          <div className={styles.readMoreHalf} style={{ backgroundColor: "#121421" }}>
            <span className={styles.projectTitle}>Project Title</span>
            <button className={styles.readMoreButton}>Read More</button>
          </div>
        </div>
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
