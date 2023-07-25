import styles from './logo.module.scss'
import { Montserrat } from "next/font/google";
import Image from "next/image";

const montserrat = Montserrat({
  weight: ["700"],
  subsets: ["latin"],
});

const Logo = ({logoTitle}) => {
  return (
    <div className={styles.header_inner}>
      <Image className={`${styles.header_image}`} width={40} height={40} src="/images/logo.svg" />
      <p className={`${montserrat.className} ${styles.header_title}`}>{logoTitle}</p>
    </div>
  );
};

export { Logo };
