import styles from "./Home.module.css";
import {
  HiOutlineFolderOpen,
  HiOutlineBriefcase,
  HiOutlineUser,
  HiOutlinePaperAirplane,
} from "react-icons/hi2";

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <div className={styles.doubleCard}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <HiOutlineUser className={styles.cardIcon} />
              <span className={styles.cardTitle}>About</span>
            </div>
            <span className={styles.cardDescription}>A bit about myself</span>
          </div>

          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <HiOutlineBriefcase className={styles.cardIcon} />
              <span className={styles.cardTitle}>Work Experience</span>
            </div>
            <span className={styles.cardDescription}>
              My career as a Software Engineer
            </span>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <HiOutlineFolderOpen className={styles.cardIcon} />
            <span className={styles.cardTitle}>Project</span>
          </div>
          <span className={styles.cardDescription}>
            Personal Projects I've been working on
          </span>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <HiOutlinePaperAirplane className={styles.contactIcon} />
            <span className={styles.cardTitle}>Contact</span>
          </div>
          <span className={styles.cardDescription}>
            Email, LinkedIn, carrier pigeon
          </span>
        </div>
      </div>
    </div>
  );
}

export default Home;
