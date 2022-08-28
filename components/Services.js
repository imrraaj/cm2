import React from "react";
import { createStyles, Text, Grid, Container, Title, Box } from "@mantine/core";
import { BsPinAngleFill, BsTwitter } from "react-icons/bs";
import { HiSpeakerphone } from "react-icons/hi";
import { MdQuestionAnswer } from "react-icons/md";
import { AiFillProject } from "react-icons/ai";

import styles_ from "../styles/Card.module.css";
const mockdata = [
  {
    title: "AMA",
    icon: MdQuestionAnswer,
    color: "violet",
    desc: function () {
      return "We host text/video AMA sessions. AMAs help projects to reach a wider audience and also act as an introductory medium for the project to our community.";
    },
  },
  {
    title: "Paid Promotion",
    icon: HiSpeakerphone,
    color: "green",
    desc: function () {
      return "We'll share the important news and specific requested posts for the predetermined time.";
    },
  },
  {
    title: "Pin post",
    icon: BsPinAngleFill,
    color: "blue",
    desc: function () {
      return "We will share specific post requested by the project in our telegram group and channel.";
    },
  },
  {
    title: "Twitter Promotion",
    icon: BsTwitter,
    color: "gray",
    desc: function () {
      return (
        <div>
          We provide 2 different services.
          <br />
          <ul style={{ paddingRight: "10" }}>
            <li>Tweet on specific news provided by the project</li>
            <li>Detailed thread about the project-company</li>
          </ul>
        </div>
      );
    },
  },
  {
    title: "KOL services",
    icon: AiFillProject,
    color: "teal",
    desc: function () {
      return "We'll take free/paid allocation of projects of our interest and provide them marketing and promotion services.";
    },
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
        <div className={styles_.wrapper}>
          <div className={styles_.card}>
            <div className={styles_.card__div}>
              <item.icon color={theme.colors[item.color][6]} />
              <Text weight="bold" mt={7} color={theme.colors[item.color][6]}>
                {item.title}
              </Text>
            </div>
            <div className={styles_.info}>
              <item.desc />
            </div>
          </div>
        </div>
      </Grid.Col>
    );
  });

  return (
    <>
      <Container pt={64} pb={32} id="services" sx={{ position: "relative" }}>
        <Title align="center" mb={32} style={{ color: "white", letterSpacing: "1px" }}>
          SERVICES
        </Title>
        <Grid justify="center" style={{ overflow: "hidden" }}>
          {items}
        </Grid>
      </Container>
    </>
  );
}
