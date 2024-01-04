import React, { useState } from "react";
import styles from "@/styles/Navbar.module.css";
import { IoMenuOutline } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

const Navbar = () => {
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeColor);
  }

  return (
    <div>
      <nav className={color ? "navbar navbar_bg" : "navbar"}>
        <li className={styles.logo}>
          <Link href={"/"}>
            {" "}
            <img src="/logofull.png" alt="" />{" "}
          </Link>
        </li>
        <input type="checkbox" id={styles.check} />
        <ul className={styles.menu}>
          <Link href={"/"}>
            <li>Home</li>
          </Link>
          <Link href={"mailto:pixelforgesol@gmail.com"}>
            <li>Contact us</li>
          </Link>
          <label htmlFor={styles.check} className={styles.closemenu}>
            <AiOutlineClose className={styles.close} />
          </label>
        </ul>
        <div className={styles.btnsec}>
          <Link href={"mailto:pixelforgesol@gmail.com"}>
            <button className={styles.contactbtn}>Let's Talk</button>
          </Link>
        </div>
        <label htmlFor={styles.check} className={styles.openmenu}>
          <IoMenuOutline className={styles.open} />
        </label>
      </nav>
    </div>
  );
};

export default Navbar;
