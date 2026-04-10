import { Link, useLocation } from "react-router-dom";
import styles from "./SideNav.module.css";
import {
  HiOutlineFolderOpen,
  HiOutlineBriefcase,
  HiOutlineUser,
  HiOutlinePaperAirplane,
  HiOutlineHome,
} from "react-icons/hi2";

const SideNav = () => {
  const location = useLocation();
  return (
    <aside className={styles.container}>
      <nav className={styles.navBox}>
        {list.map((nav, index) => {
          const Icon = nav.icon;
          const isActive = location.pathname === nav.link;

          return (
            <Link
              key={index}
              to={nav.link}
              className={`${styles.nav} ${isActive ? styles.active : ""}`}
            >
              <Icon
                className={`${styles.cardIcon} ${nav.name === "Contact" ? styles.rotated : ""}`}
              />
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default SideNav;

const list = [
  { name: "Project", link: "/", icon: HiOutlineFolderOpen },
  { name: "About", link: "/about", icon: HiOutlineUser },
  { name: "Home", link: "/", icon: HiOutlineHome },
  { name: "Work", link: "/", icon: HiOutlineBriefcase },
  { name: "Contact", link: "/", icon: HiOutlinePaperAirplane },
];
