import React, { useContext } from "react";
import Link from "next/link";
import { FaTwitter, FaMediumM, FaTelegramPlane } from "react-icons/fa";
import styles from "../styles/Footer.module.scss";

function Footer() {
  return (
    <footer className={`${styles.footer} container`}>
      <div className={styles.logo}>
        <h1>Crypto Maxxis</h1>
        <p>
          &copy; {new Date().getFullYear()} Cryto Maxxis | All rights reserved
        </p>
        <p>
          Powered By{" "}
          <Link href="https://github.com/imrraaj" target="_blank">
            @imrraaj
          </Link>
        </p>
      </div>
      <div className={styles.socials}>
        <Link href="https://google.com">
          <button className={`${styles.social__round} btn`}>
            <FaTwitter />
          </button>
        </Link>
        <Link href="https://raj-patel.netlify.app">
          <button className={`${styles.social__round} btn`}>
            <FaMediumM />
          </button>
        </Link>
        <Link href="https://t.me/thedeltaw">
          <button className={`${styles.social__round} btn`}>
            <FaTelegramPlane />
          </button>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
