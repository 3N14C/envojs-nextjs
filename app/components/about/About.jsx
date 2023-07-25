import Image from "next/image";
import styles from "./about.module.scss";

const About = () => {
  return (
    <div id="about" className={`${styles.about}`}>
      <div className={`${styles.about_flex}`}>
        <p className={`${styles.about_title}`}>Why Enver Is The Best Choice?</p>
        <p className={`${styles.about_text}`}>
          Watch this one minute video so you understand why you should use our
          services!
        </p>
      </div>

      
    </div>
  );
};

export { About };
