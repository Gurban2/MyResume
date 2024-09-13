import styles from "./ProjectsStyles.module.css";
import signin from "../../assets/viberr.png";
import mcOrder from "../../assets/fresh-burger.png";
import hipsster from "../../assets/hipsster.png";
import fitLift from "../../assets/fitlift.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={signin}
          link="https://github.com/Gurban2/Sign-in-ProfilePage.git"
          h3="Sign in"
          p="Sign in Page"
        />
        <ProjectCard
          src={mcOrder}
          link="https://github.com/Gurban2/mcDonalds.git"
          h3="Mc Order"
          p="Hamburger Restaurant"
        />
        {/* <ProjectCard
          src={hipsster}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Hipsster"
          p="Glasses Shop"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="FitLift"
          p="Fitness App"
        /> */}
      </div>
    </section>
  );
}

export default Projects;
