import { createStyles, Text, Container } from "@mantine/core";
import { animate, motion } from "framer-motion";
import React, { useEffect, useRef } from "react";

const data = [
  { title: "Members in the community", num: 100000 },
  { title: "Total rewards distributed", num: 15000 },
  { title: "AMAs Completed", num: 150 },
];

const useStyles2 = createStyles((theme) => ({
  root: {
    display: "flex",
    backgroundImage: `linear-gradient(-60deg, #BC9E2B 0%, #957D22 100%)`,
    marginBlock: "1.5rem",
    paddingInline: theme.spacing.lg * 1.5,
    paddingBlock: theme.spacing.lg * 2,
    borderRadius: theme.radius.md,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
      gap: "1rem",
    },
  },

  title: {
    color: theme.white,
    fontWeight: 700,
    fontSize: theme.fontSizes.lg,
  },

  count: {
    color: theme.white,
    fontSize: 32,
    lineHeight: 1,
    fontWeight: 700,
    marginBottom: theme.spacing.lg,
    fontFamily: theme.fontFamily,
  },

  stat: {
    flex: 1,

    "& + &": {
      paddingLeft: theme.spacing.xl,
      marginLeft: theme.spacing.xl,
      borderLeft: `1px solid ${theme.colors[theme.primaryColor][3]}`,

      [theme.fn.smallerThan("sm")]: {
        paddingLeft: 0,
        marginLeft: 0,
        borderLeft: 0,
        paddingTop: theme.spacing.xl,
        marginTop: theme.spacing.xl,
        borderTop: `1px solid ${theme.colors[theme.primaryColor][3]}`,
      },
    },
  },
}));

export function StatsGroup() {
  const { classes } = useStyles2();

  const stats = data.map((stat) => (
    <div key={stat.title} className={classes.stat}>
      <Text className={classes.count}>
        <Counter from={0} to={stat.num} />
        {`+`}
      </Text>

      <Text className={classes.title}>{stat.title}</Text>
    </div>
  ));
  return (
    <Container pt={64} id="statistics">
      <div className={classes.root}>{stats}</div>
    </Container>
  );
}

export default function Stats() {
  return <StatsGroup />;
}

function Counter({ from, to }) {
  const nodeRef = useRef();

  useEffect(() => {
    const node = nodeRef.current;

    const controls = animate(from, to, {
      duration: 4,
      onUpdate(value) {
        node.textContent = value.toFixed(0);
      },
    });

    return () => controls.stop();
  }, [from, to]);

  return (
    <motion.span
      ref={nodeRef}
      viewport={{ once: false }}
      whileInView={{ opacity: 1 }}
    />
  );
}
