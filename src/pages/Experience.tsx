import styles from "./Experience.module.css";
import { experiences } from "../data/experience";

const Experience = () => {
  return (
    <div className={styles.container}>
      {experiences.map((exp) => (
        <section key={exp.id} className={styles.section}>
          <div>
            <h1>
              {exp.role} | {exp.period}
            </h1>

            <h2 className={styles.company}>
              {exp.company} — {exp.location}
            </h2>

            <ul>
              {exp.achievements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Experience;
