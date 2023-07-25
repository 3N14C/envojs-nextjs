import Image from 'next/image';
import styles from './portfolio.module.scss'

const Portfolio = () => {
  return (
    <>
      <div id="projects" className={`${styles.portfolio}`}>
        <p className={`${styles.portfolio_title}`}>Our Awesome Portofolio</p>
        <div className={styles.blink}>
          <Image
            className={`${styles.portfolio_image}`}
            width={62}
            height={72}
            src={`/images/ring.svg`}
          />
        </div>
      </div>

      <div className={`${styles.portfolio_projects}`}>
        <Image
          className={`${styles.portfolio_projects_img}`}
          width={340}
          height={250}
          src={`/images/cinema.png`}
        />
        <Image
          className={`${styles.portfolio_projects_img}`}
          width={340}
          height={250}
          src={`/images/apartments.png`}
        />
        <Image
          className={`${styles.portfolio_projects_img}`}
          width={340}
          height={250}
          src={`/images/social.png`}
        />
      </div>

      <div className={`${styles.vector}`}>
        <Image width={95} height={28} src={`/images/vector.svg`} />
      </div>
    </>
  );
};

export { Portfolio };
