import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/photo.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import behanceLight from "../../assets/behance.svg";
import behanceDark from "../../assets/behance-1.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/Cv_Gurban.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const behanceIcon = theme === "light" ? behanceLight : behanceDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Harris Johnsen"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Gurban
          <br />
          Muradov
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href="https://www.behance.net/qurbanmuradov/" target="_blank">
            <img src={behanceIcon} alt="behance icon" />
          </a>
          <a href="https://github.com/Gurban2" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/gurban-muradov-3b513b223/"
            target="_blank"
          >
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          I am a strong junior developer, always seeking new challenges as I am
          eager to grow and develop in this field
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
