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
    position: "relative",
    backgroundImage: "url(/bg.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "80vh",
    backgroundAttachment: "fixed",
  },

  container: {
    height: 700,
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
    fontSize: 60,
    fontWeight: 900,
    lineHeight: 1.1,

    [theme.fn.smallerThan("xs")]: {
      fontSize: 40,
      lineHeight: 1.3,
    },
  },

  description: {
    color: theme.white,
    fontWeight: 600,
    maxWidth: 600,

    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%",
      fontSize: theme.fontSizes.md,
    },
  },

  control: {
    marginTop: theme.spacing.xl * 1.5,
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
          One of the biggest community of cryptocurrency investors based in Asia
        </Title>
        <Text className={classes.description} size="xl" mt="xl">
          We've worked with some of the biggest crypto projects, exchange and
          VCs. We provide multiple services related to marketing and promotion.
        </Text>

        <Link href="https://t.me/thedeltaw" passHref>
          <Button component="a" size="lg" className={classes.control}>
            Contact
          </Button>
        </Link>
      </Container>
    </div>
  );
}
