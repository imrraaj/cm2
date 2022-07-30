// import React, { useContext } from "react";
// import styles from "../styles/Services.module.scss";
// import { useContent } from "../utils/ContentContext";
// function Services() {

//   const content = useContent();
//   return (
//     <>
//       <div id="services"></div>
//       <div className={styles.desc}>
//         <h3 className={styles.desc_title}>Servies</h3>
//         <p>
//           {content.services.desc}
//         </p>
//       </div>
//       <div className={`container ${styles.grid_container}`}>

//         <div className={styles.c1}>
//           <Card text={content.services.tags[0]} shadow="lightcoral" />
//         </div>
//         <div className={styles.c2}>
//           <Card text={content.services.tags[1]} shadow="lightblue" />
//         </div>
//         <div className={styles.c3}>
//           <Card text={content.services.tags[2]} shadow="lightgreen" />
//         </div>
//         <div className={styles.c4}>
//           <Card text={content.services.tags[3]} shadow="lightgray" />
//         </div>
//         <div className={styles.c4}>
//           <Card text={content.services.tags[4]} shadow="lightgray" />
//         </div>
//       </div>
//     </>
//   );
// }

// function Card({ text, shadow }) {

//   return (
//     <div className={styles.card} style={{
//       boxShadow: `5px 5px 10px ${shadow}`,
//       border: `1px solid white`
//     }}>
//       <p>{text}</p>
//     </div>
//   );
// }
// export default Services;

// import {
//   createStyles,
//   Title,
//   SimpleGrid,
//   Text,
//   Button,
//   ThemeIcon,
//   Grid,
//   Col,
// } from "@mantine/core";
// import {
//   IconReceiptOff,
//   IconFlame,
//   IconCircleDotted,
//   IconFileCode,
// } from "@tabler/icons";

// const useStyles = createStyles((theme) => ({
//   wrapper: {
//     padding: `${theme.spacing.xl * 2}px ${theme.spacing.xl}px`,
//   },

//   title: {
//     fontFamily: `Greycliff CF, ${theme.fontFamily}`,
//     fontSize: 36,
//     fontWeight: 900,
//     lineHeight: 1.1,
//     marginBottom: theme.spacing.md,
//     color: theme.colorScheme === "dark" ? theme.white : theme.black,
//   },
// }));

// const features = [
//   {
//     icon: IconReceiptOff,
//     title: "Free and open source",
//     description:
//       "All packages are published under MIT license, you can use Mantine in any project",
//   },
//   {
//     icon: IconFileCode,
//     title: "TypeScript based",
//     description:
//       "Build type safe applications, all components and hooks export types",
//   },
//   {
//     icon: IconCircleDotted,
//     title: "No annoying focus ring",
//     description:
//       "With new :focus-visible selector focus ring will appear only when user navigates with keyboard",
//   },
//   {
//     icon: IconFlame,
//     title: "Flexible",
//     description:
//       "Customize colors, spacing, shadows, fonts and many other settings with global theme object",
//   },
// ];

// export default function FeaturesTitle() {
//   const { classes } = useStyles();

//   const items = features.map((feature) => (
//     <div key={feature.title}>
//       <ThemeIcon
//         size={44}
//         radius="md"
//         variant="gradient"
//         gradient={{ deg: 133, from: "blue", to: "cyan" }}
//       >
//         <feature.icon size={26} stroke={1.5} />
//       </ThemeIcon>
//       <Text size="lg" mt="sm" weight={500}>
//         {feature.title}
//       </Text>
//       <Text color="dimmed" size="sm">
//         {feature.description}
//       </Text>
//     </div>
//   ));

//   return (
//     <div className={classes.wrapper}>
//       <Grid gutter={80}>
//         {/* <Col span={12} md={5}>
//           <Title className={classes.title} order={2}>
//             A fully featured React components library for your next project
//           </Title>
//           <Text color="dimmed">
//             Build fully functional accessible web applications faster than ever – Mantine includes
//             more than 120 customizable components and hooks to cover you in any situation
//           </Text>

//           <Button
//             variant="gradient"
//             gradient={{ deg: 133, from: 'blue', to: 'cyan' }}
//             size="lg"
//             radius="md"
//             mt="xl"
//           >
//             Get started
//           </Button>
//         </Col> */}
//         <Col span={12} md={7}>
//           <SimpleGrid
//             cols={2}
//             spacing={30}
//             breakpoints={[{ maxWidth: "md", cols: 1 }]}
//           >
//             {items}
//           </SimpleGrid>
//         </Col>
//       </Grid>
//     </div>
//   );
// }
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  createStyles,
  Card,
  Text,
  Grid,
  UnstyledButton,
  Anchor,
  Group,
  Container,
  Title,
  Popover,
} from "@mantine/core";
import {
  IconCreditCard,
  IconBuildingBank,
  IconRepeat,
  IconReceiptRefund,
  IconReceipt,
  IconReceiptTax,
  IconReport,
  IconCashBanknote,
  IconCoin,
} from "@tabler/icons";

const mockdata = [
  {
    title: "AMA",
    icon: IconCreditCard,
    color: "violet",
    desc: "We host text/video AMA sessions. AMAs help projects to reach a wider audience and also act as an introductory medium for the project to our community.",
  },
  {
    title: "Paid Promotion",
    icon: IconBuildingBank,
    color: "indigo",
    desc: "We'll share the important news and specific requested posts for the predetermined time.",
  },
  {
    title: "Pin post",
    icon: IconRepeat,
    color: "blue",
    desc: "We will share specific post requested by the project in our telegram group and channel.",
  },
  {
    title: "Twitter Promotion",
    icon: IconReceiptRefund,
    color: "gray",
    desc: `We have 2 different services for twitter promotion 
    1. Specific news or information provided by the project will be shared on our twitter handle.\n 
    2. A detailed thread about the project/company will be written and shared on our twitter.`,
  },
  {
    title: "KOL services",
    icon: IconReceipt,
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
    textAlign: "center",
    borderRadius: theme.radius.md,
    minHeight: 350,
    border: "2px solid gray",
    transform: "scale(0.85)",
    transition: "box-shadow 150ms ease, transform 500ms ease",

    "&:hover": {
      boxShadow: `${theme.shadows.md} !important`,
      transform: "scale(0.80)",
    },
  },
}));

export default function ActionsGrid() {
  const { classes, theme } = useStyles();

  const items = mockdata.map((item) => (
    <Grid.Col key={item.title} className={classes.item} span={12} lg={4}>
      <Popover width={200} position="bottom" withArrow shadow="md">
        <Popover.Target>
          <div>
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
        </Popover.Target>
        <Popover.Dropdown
          sx={{ pointerEvents: "none" }}
          style={{ backgroundColor: "black", minWidth: "50ch" }}
        >
          <Text size="lg" color="white">
            {item.desc}
          </Text>
        </Popover.Dropdown>
      </Popover>
    </Grid.Col>
  ));

  const [selectedId, setSelectedId] = React.useState(null);

  return (
    <>
      <Container pt={64} pb={32} id="services" sx={{ position: "relative" }}>
        <Title align="center" mb={32} style={{ color: "white" }}>
          Services
        </Title>
        <Grid grow justify="center">
          {items}
        </Grid>
      </Container>
    </>
  );
}
