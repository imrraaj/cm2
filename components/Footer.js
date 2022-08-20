import React, { useContext } from "react";
import Link from "next/link";
import { FaTwitter, FaMediumM, FaTelegramPlane } from "react-icons/fa";
import styles from "../styles/Footer.module.scss";
import { Button, createStyles, Text } from "@mantine/core";



const useStyles = createStyles((theme) => ({
  title: {
    fontWeight: 700,
  },

  social__round: {
    margin: "1rem",
    "& > svg": {
      fontSize: theme.fontSizes.lg * 1.5,
      color: theme.colors.yellow[0],
    },
    "&:hover > svg": {
      color: theme.colors.yellow[7],
      cursor: "pointer"
    }
  }

}));



function Footer() {
  const { classes } = useStyles();
  return (
    <footer className={`${styles.footer} container`}>
      <div className={styles.logo}>
        <Text color={"yellow"} size="32px" weight={"bolder"}>Crypto Maxxis</Text>
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
        <Link href="https://t.me/thedeltaw">
          <div className={classes.social__round}>
            <FaTelegramPlane />
          </div>
        </Link>
        <Link href="https://google.com">
          <div className={classes.social__round}>
            <FaTwitter />
          </div>
        </Link>
        <Link href="https://raj-patel.netlify.app">
          <div className={classes.social__round}>
            <FaMediumM />
          </div>
        </Link>

      </div>
    </footer>
  );
}

export default Footer;
