import { Modal, Transition } from "@mantine/core";
import Link from "next/link";
import React, { useState } from "react";
import { FaTwitter, FaMediumM, FaTelegramPlane } from "react-icons/fa";
import styles from "../styles/Navbar.module.scss";

import { Button, Paper, Text, Group, CloseButton } from "@mantine/core";

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
      text: "Posts",
      url: "/posts",
    },
  ],
  profileLinks: [],
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isContactOpen, SetisContactOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <nav className={`container ${styles.nav}`}>
          <div className={styles.logo}>
            <Link href="/">{navbar.logo}</Link>
          </div>

          <ul
            className={
              isOpen
                ? `${styles.open} ${styles.primary__navigation}`
                : styles.primary__navigation
            }
          >
            {navbar.links.map((item, __index) =>
              item.text == "Contact" ? (
                ""
              ) : (
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
              <Button color="green">Contact</Button>
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
        </nav>
      </header>

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
            style={{
              ...styles,
              zIndex: 20,
              position: "fixed",
              top: "4rem",
              right: "0.5rem",
            }}
          >
            <Group position="apart">
              <Text size="lg" weight="bold">
                Contact here
              </Text>
              <CloseButton onClick={() => SetisContactOpen(!isContactOpen)} />
            </Group>

            <Group position="left" mt="xs">
              <Link href="https://google.com">
                <Button variant="light" size="sm">
                  <FaTwitter />
                </Button>
              </Link>
              <Link href="https://google.com">
                <Button variant="light" size="sm">
                  <FaTelegramPlane />
                </Button>
              </Link>
              <Link href="https://google.com">
                <Button variant="light" size="sm">
                  <FaTelegramPlane />
                </Button>
              </Link>
            </Group>
          </Paper>
        )}
      </Transition>
    </>
  );
}

export default Navbar;
