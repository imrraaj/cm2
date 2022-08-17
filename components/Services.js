import React from "react";
import { createStyles, Text, Grid, Container, Title, Box } from "@mantine/core";
import { BsPinAngleFill, BsTwitter } from "react-icons/bs";
import { HiSpeakerphone } from "react-icons/hi";
import { MdQuestionAnswer } from "react-icons/md";
import { AiFillProject } from "react-icons/ai";

import styles from "../styles/Services.module.scss";
import Card from "./Card";

import styles_ from "../styles/Card.module.css";
const mockdata = [
  {
    title: "AMA",
    icon: MdQuestionAnswer,
    color: "violet",
    desc: "We host text/video AMA sessions. AMAs help projects to reach a wider audience and also act as an introductory medium for the project to our community.",
  },
  {
    title: "Paid Promotion",
    icon: HiSpeakerphone,
    color: "green",
    desc: "We'll share the important news and specific requested posts for the predetermined time.",
  },
  {
    title: "Pin post",
    icon: BsPinAngleFill,
    color: "blue",
    desc: "We will share specific post requested by the project in our telegram group and channel.",
  },
  {
    title: "Twitter Promotion",
    icon: BsTwitter,
    color: "gray",
    desc: `We have 2 different services for twitter promotion <br/>
    1. Specific news or information provided by the project will be shared on our twitter handle.<br />
    2. A detailed thread about the project/company will be written and shared on our twitter.`,
  },
  {
    title: "KOL services",
    icon: AiFillProject,
    color: "teal",
    desc: "We'll take free/paid allocation of projects of our interest and provide them marketing and promotion services.",
  },
];

const useStyles = createStyles((theme) => ({
  title: {
    fontWeight: 700,
  },

  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default function ActionsGrid() {
  const { classes, theme } = useStyles();

  const items = mockdata.map((item) => {
    return (
      <Grid.Col key={item.title} className={classes.item} span={12} lg={4}>
        <div class={styles_.wrapper}>
          <div class={styles_.card}>
            <div className={styles_.card__div}>
              <item.icon color={theme.colors[item.color][6]} />
            </div>
            <div class={styles_.info}>
              <Text size="xl" weight="bold" mt={7}>
                {item.title}
              </Text>
              <p dangerouslySetInnerHTML={{ __html: item.desc }}></p>
            </div>
          </div>
        </div>
        {/* <Card data={item}/> */}
        {/* <div className={styles.card}>
          <div className={styles.cardIcon}>
            <item.icon color={theme.colors[item.color][6]} size={64} />
            <Text
              size="xl"
              weight="bold"
              mt={7}
              color={theme.colors[item.color][6]}
            >
              {item.title}
            </Text>
          </div>
          <Text
          size="lg"
            className={styles.onhover}
            dangerouslySetInnerHTML={{ __html: item.desc }}
          >
          </Text>
        </div> */}
      </Grid.Col>
    );
  });

  return (
    <>
      <Container pt={64} pb={32} id="services" sx={{ position: "relative" }}>
        <Title align="center" mb={32} style={{ color: "white" }}>
          Services
        </Title>
        <Grid justify="center" style={{ overflow: "hidden" }}>
          {items}
        </Grid>
      </Container>
    </>
  );
}
