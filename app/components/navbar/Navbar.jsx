"use client";

import { Nunito_Sans } from "next/font/google";
import styles from "./navbar.module.scss";
import Link from "next/link";

const nunito = Nunito_Sans({
  subsets: ["latin"],
});

const Navbar = () => {
  const handleScroll = (e) => {
    e.preventDefault();

    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");

    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="">
      <div className={`${styles.navbar} ${nunito.className}`}>
        <Link className={`${styles.navbar_link}`} href="/">
          Home
        </Link>

        <Link
          onClick={handleScroll}
          className={`${styles.navbar_link}`}
          href="#services"
        >
          Services
        </Link>

        <Link onClick={handleScroll} className={`${styles.navbar_link}`} href="#projects">
          Our Project
        </Link>

        <Link onClick={handleScroll} className={`${styles.navbar_link}`} href="#about">
          About us
        </Link>
      </div>
    </div>
  );
};

export { Navbar };
