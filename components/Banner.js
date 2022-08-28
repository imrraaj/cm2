import {
  createStyles,
  Overlay,
  Container,
  Title,
  Button,
  Text,
} from "@mantine/core";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
  hero: {
    paddingTop: "3rem",
    position: "relative",
    backgroundImage: "url(/bg.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "700px",
    backgroundAttachment: "fixed",
  },

  container: {
    minHeight: 700,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingBottom: theme.spacing.xl * 6,
    zIndex: 1,
    position: "relative",
  },

  title: {
    color: theme.white,
    fontSize: 50,
    fontWeight: 900,
    lineHeight: 1.1,
    textTransform: "uppercase",
    letterSpacing: "1px",
    width: "75%",

    [theme.fn.smallerThan("xs")]: {
      fontSize: 32,
      lineHeight: 1.3,
      width: "100%",
      // letterSpacing: "1px",

    },
  },

  description: {
    color: theme.white,
    // fontWeight: 600,
    maxWidth: 600,

    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%",
      fontSize: theme.fontSizes.md,
    },
  },

  control: {
    marginTop: theme.spacing.xl * 1.5,
    backgroundColor: theme.colors["brand"][0],
    "&:hover": {
      backgroundColor: theme.colors["brand"][5],
    },
  },
}));

export default function HeroContentLeft() {
  const { classes } = useStyles();

  return (
    <div className={classes.hero} id="home">
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container}>
        <Title className={classes.title}>
          One of the largest cryptocurrency investors community based in Asia
        </Title>
        <Text className={classes.description} size="xl" mt="xl">
          {`We've worked with some of the biggest crypto projects, 
          exchanges and VCs. We provide multiple services related to marketing and
          promotion.`}
        </Text>

        <Link href="https://t.me/crypto_maxxis" passHref>
          <Button component="a" size="lg" className={classes.control}>
            Join Us
          </Button>
        </Link>
      </Container>
    </div>
  );
}
