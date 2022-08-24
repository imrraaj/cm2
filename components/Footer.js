import React from "react";
import Link from "next/link";
import { FaTwitter, FaTelegramPlane } from "react-icons/fa";
import { TbSpeakerphone } from "react-icons/tb";
import styles from "../styles/Footer.module.scss";
import { createStyles, Text } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  title: {
    fontWeight: 700,
    fontSize: theme.fontSizes.xl * 1.5,
    color: theme.colors["brand"][0],
  },

  social__round: {
    margin: "1rem",
    color: theme.colors["brand"][0],
    "& > svg": {
      fontSize: theme.fontSizes.lg * 1.5,
      color: theme.colors["brand"][0],
    },
    "&:hover > svg": {
      color: theme.colors["brand"][3],
      cursor: "pointer",
    },
  },
}));

function Footer() {
  const { classes } = useStyles();
  return (
    <footer className={`${styles.footer} container`}>
      <div className={styles.logo}>
        <Text className={classes.title}>Crypto Maxxis</Text>
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
        <Link href="https://t.me/Crypto_Maxxis">
          <div className={classes.social__round}>
            <FaTelegramPlane />
          </div>
        </Link>
        <Link href="https://t.me/cryptomaxxis_ann">
          <div className={classes.social__round}>
            <TbSpeakerphone />
          </div>
        </Link>
        <Link href="https://twitter.com/crypto_maxxis">
          <div className={classes.social__round}>
            <FaTwitter />
          </div>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
