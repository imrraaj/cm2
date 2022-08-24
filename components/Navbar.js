import { createStyles, Modal, Transition } from "@mantine/core";
import Link from "next/link";
import React, { useState } from "react";
import { FaTwitter, FaMediumM, FaTelegramPlane } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import styles from "../styles/Navbar.module.scss";

import { Button, Paper, Text, Group, CloseButton } from "@mantine/core";
import Image from "next/image";

const useStyles = createStyles((theme) => ({
  title: {
    fontWeight: 700,
  },
  ctaBtn: {
    backgroundColor: theme.colors["brand"][0],
    "&:hover": {
      backgroundColor: theme.colors["brand"][5],
    },
  },

  social__round: {
    margin: "1rem",
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

const navbar = {
  logo: "Crypto Maxxis",
  links: [
    {
      text: "Home",
      url: "/#home",
    },
    {
      text: "Stats",
      url: "/#stats",
    },
    {
      text: "Services",
      url: "/#services",
    },
    {
      text: "FAQs",
      url: "/#faqs",
    },
    {
      text: "Feed",
      url: "/feed",
    },
  ],
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isContactOpen, SetisContactOpen] = useState(false);
  const { classes } = useStyles();

  return (
    <>
      <header className={styles.header}>
        <nav className={`container ${styles.nav}`}>
          <div className={styles.logo}>
            <Link href="/">
              <a>
                <Image
                  src="/logo.png"
                  alt="Crypto Maxxis Logo"
                  width={"125%"}
                  height="100%"
                  objectFit="contain"
                />
              </a>
            </Link>
          </div>

          <ul
            className={
              isOpen
                ? `${styles.open} ${styles.primary__navigation}`
                : styles.primary__navigation
            }
          >
            {navbar.links.map(
              (item, __index) =>
                item.text !== "Contact" && (
                  <li
                    key={__index}
                    className={styles.nav__link}
                    onClick={() => {
                      setIsOpen(!isOpen);
                    }}
                  >
                    <Link href={item.url} scroll={false}>
                      {item.text}
                    </Link>
                  </li>
                )
            )}

            <li
              className={styles.nav__link}
              onClick={() => {
                SetisContactOpen(!isContactOpen);
                setIsOpen(!isOpen);
              }}
            >
              <Button className={classes.ctaBtn}>Contact</Button>
            </li>
          </ul>
          <button
            className={isOpen ? `${styles.menu} ${styles.opened}` : styles.menu}
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Main Menu"
          >
            <svg width="40" height="40" viewBox="0 0 100 100">
              <path
                className={`${styles.line} ${styles.line1}`}
                d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
              />
              <path
                className={`${styles.line} ${styles.line2}`}
                d="M 20,50 H 80"
              />
              <path
                className={`${styles.line} ${styles.line3}`}
                d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
              />
            </svg>
          </button>

          <Transition
            mounted={isContactOpen}
            transition="fade"
            duration={400}
            timingFunction="ease"
          >
            {(styles) => (
              <Paper
                withBorder
                p="md"
                sx={{
                  "@media (min-width:500px)": {
                    ...styles,
                    zIndex: 20,
                    position: "fixed",
                    top: "6.5rem",
                    right: "1rem",
                  },
                  "@media (max-width:500px)": {
                    ...styles,
                    zIndex: 20,
                    position: "fixed",
                    border: "2px solid lime",
                    minWidth: "max-content",
                    // marginBlock: "50%",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    zIndex: 10,
                    boxShadow: "0 0 0 100vmax black",
                    isolation: "isolate",
                  },
                }}
              >
                <Group position="apart">
                  <Text size="lg" weight="bold">
                    Contact here
                  </Text>
                  <CloseButton
                    onClick={() => SetisContactOpen(!isContactOpen)}
                  />
                </Group>

                <Group position="left" mt="xs">
                  <Link href="https://t.me/KryptoNite_02">
                    <div className={classes.social__round}>
                      <FaTelegramPlane />
                    </div>
                  </Link>
                  <Link href="https://twitter.com/crypto_maxxis">
                    <div className={classes.social__round}>
                      <FaTwitter />
                    </div>
                  </Link>
                  <Link href="mailto:cryptomaxxis@gmail.com">
                    <div className={classes.social__round}>
                      <MdMail />
                    </div>
                  </Link>
                </Group>
              </Paper>
            )}
          </Transition>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
