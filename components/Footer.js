import React from "react";
import styles from "@/styles/Footer.module.css";
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <footer className={styles.footer}>
        <h4>pixelforge solutions&nbsp;©&nbsp;All rights reserved 2023</h4>
        <div className={styles.subsec1}>
          <Link href={"https://www.instagram.com/pixelforgesol/"}>
            {" "}
            <BsInstagram className={styles.bs1} />
          </Link>
          <Link href={"https://www.linkedin.com/in/haider-irfan-7b2088270/"}>
            {" "}
            <BsLinkedin className={styles.bs2} />
          </Link>
          <Link href={"https://github.com/haiderirfan8"}>
            <BsGithub className={styles.bs3} />
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
