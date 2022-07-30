import { Modal } from "@mantine/core";
import Link from "next/link";
import React, { useState } from "react";
import { FaTwitter, FaMediumM, FaTelegramPlane } from "react-icons/fa";
import styles from "../styles/Navbar.module.scss";
import { useContent } from "../utils/ContentContext";

import { Button, Paper, Text, Group, CloseButton } from "@mantine/core";

function Navbar() {
  const content = useContent();
  const [isOpen, setIsOpen] = useState(false);
  const [isContactOpen, SetisContactOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <nav className={`container ${styles.nav}`}>
          <div className={styles.logo}>
            <Link href="/">{content.navbar.logo}</Link>
          </div>

          <ul
            className={
              isOpen
                ? `${styles.open} ${styles.primary__navigation}`
                : styles.primary__navigation
            }
          >
            {content.navbar.links.map((item, __index) =>
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
              className={`${styles.nav__link} ${styles.ctabutton} `}
              onClick={() => {
                SetisContactOpen(!isContactOpen);
                setIsOpen(!isOpen);
              }}
            >
              <Link href={"#contact"} scroll={false}>
                Contact
              </Link>
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

      {isContactOpen && (
        <Paper
          withBorder
          p="lg"
          radius="md"
          shadow="md"
          style={{
            maxWidth: "20ch",
            zIndex: 20,
            position: "fixed",
            top: "75px",
            right: "16px",
          }}
        >
          <Group position="apart" mb="xs">
            <Text size="md" weight={500}>
              Contact
            </Text>
            <CloseButton onClick={() => SetisContactOpen(!isContactOpen)} />
          </Group>

          <Group position="apart" mt="xs">
            <Button
              as={Link}
              to="https://google.com"
              variant="outline"
              size="xs"
            >
              <FaTwitter />
            </Button>
            <Button
              as={Link}
              to="https://google.com"
              variant="outline"
              size="xs"
            >
              <FaTelegramPlane />
            </Button>
          </Group>
        </Paper>
      )}
      {/* <dialog className={styles.dialog} open={isContactOpen}
        style={{
          display: isContactOpen ? "flex" : "none"
        }}
      >
        <div className={styles.dialog__div}>
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
          <button className="btn"
            onClick={() => { SetisContactOpen(!isContactOpen); }}
          >Collapse</button>
        </div>

      </dialog> */}
    </>
  );
}

export default Navbar;
