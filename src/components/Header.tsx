import { useEffect, useState } from "react";
import styles from "./Header.module.css";

const name = "Betsy Arinze";
const titles = ["Software Engineer", "Product Engineer", "Creative"];

function Header() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % titles.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.textWrapper}>
        <h1 className={styles.name}>
          {name.split("").map((letter, i) => (
            <span
              key={i}
              className={styles.letter}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </h1>
        <div className={styles.titleWrapper}>
          <p key={index} className={styles.title}>
            {titles[index]}
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
