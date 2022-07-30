// import Link from "next/link";
// import React from "react";
// import styles from "../styles/Banner.module.scss";
import { useContent } from '../utils/ContentContext';

// export default function Banner() {

//   return (
//     <>
//     {/* <section>
//       <div className={styles.bg}>
//       <div className={styles.banner} id="home">
//         <div className={`container ${styles.banner_desc}`}>
//           <h1>
//             {content.banner.title}
//           </h1>
//           <p>{content.banner.desc}</p>
//           <Link href={content.banner.link}>
//             <button className={`btn ${styles.cta}`}> {content.banner.cta}</button>
//           </Link>
//         </div>
//       </div>
//       </div>
//     </section> */}
//     </>
//   );
// }

import {
  createStyles,
  Overlay,
  Container,
  Title,
  Button,
  Text,
} from '@mantine/core';

const useStyles = createStyles((theme) => ({
  hero: {
    position: 'relative',
    backgroundImage:
      'url(https://images.unsplash.com/photo-1439792675105-701e6a4ab6f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG5hdHVyZXxlbnwwfHwwfGJsYWNrfA%3D%3D?q=60)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '80vh',
    backgroundAttachment: 'fixed',
  },

  container: {
    height: 700,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingBottom: theme.spacing.xl * 6,
    zIndex: 1,
    position: 'relative',
  },

  title: {
    color: theme.white,
    fontSize: 60,
    fontWeight: 900,
    lineHeight: 1.1,

    [theme.fn.smallerThan('xs')]: {
      fontSize: 40,
      lineHeight: 1.3,
    },
  },

  description: {
    color: theme.white,
    fontWeight: 600,
    maxWidth: 600,

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
      fontSize: theme.fontSizes.md,
    },
  },

  control: {
    marginTop: theme.spacing.xl * 1.5,
  },
}));

export default function HeroContentLeft() {
  const { classes } = useStyles();
  const content = useContent();

  return (
    <div className={classes.hero} id="home">
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container}>
        <Title className={classes.title}>{content.banner.title}</Title>
        <Text className={classes.description} size="xl" mt="xl">
          {content.banner.desc}
        </Text>

        <Button
          variant="filled"
          size="lg"
          radius="md"
          className={classes.control}
        >
          Get started
        </Button>
      </Container>
    </div>
  );
}
