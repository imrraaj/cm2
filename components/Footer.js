import React, { useContext } from "react";
import Link from 'next/link';
import { FaTwitter, FaMediumM, FaTelegramPlane } from "react-icons/fa";
import styles from "../styles/Footer.module.scss"
import { useContent } from "../utils/ContentContext";

function Footer() {
  const content = useContent();
  return (
    <footer className={`${styles.footer} container`}>
      <div className={styles.logo}>
        <h1>{content.navbar.logo}</h1>
        <p>&copy; {new Date().getFullYear()} Cryto Maxxis | All rights reserved</p>
        <p>Powered By <Link href="https://github.com/imrraaj" target="_blank">@imrraaj</Link></p>
      </div>
      <div className={styles.socials}>
        <Link href={content.socials.twitter}>
          <button className={`${styles.social__round} btn`}>
            <FaTwitter />
          </button>
        </Link>
        <Link href={content.socials.medium}>
          <button className={`${styles.social__round} btn`}>
            <FaMediumM />
          </button>
        </Link>
        <Link href={content.socials.telegram}>
          <button className={`${styles.social__round} btn`}>
            <FaTelegramPlane />
          </button>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
