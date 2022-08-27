import React from "react";
import Banner from "../components/Banner";
import Services from "../components/Services";
import Stats from "../components/Stats";
import Collab from "../components/Collab";
import Faqs from "../components/Faqs";
import Head from "next/head";
import { Button, Paper, Text, Group, CloseButton } from "@mantine/core";

export default function Home() {
  const [showCookie, setShowCookie] = React.useState(true);

  function CookiesBanner() {
    return (
      <Paper
        withBorder
        p="lg"
        sx={{
          width: "min(100% - 0.5rem , 1080px)",
          zIndex: 20,
          position: "fixed",
          bottom: "1rem",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <Group position="apart" mb="xs">
          <Text size="lg" weight="bolder">
            Allow cookies
          </Text>
          <CloseButton onClick={() => setShowCookie(false)} />
        </Group>

        <Text color="gray" size="sm">
          WE have something exciting to tell you!
        </Text>

        <Group mt="lg">
          <Button
            variant="default"
            size="sm"
            onClick={() => setShowCookie(false)}
          >
            Preferences
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowCookie(false)}
          >
            Accept all
          </Button>
        </Group>
      </Paper>
    );
  }

  return (
    <main style={{ position: "relative" }}>
      <Head>
        <title>CryptoMaxxis</title>
      </Head>
      {/* {showCookie && <CookiesBanner />} */}
      <Banner />
      <Stats />
      <Services />
      <Collab />
      <Faqs />
    </main>
  );
}

export const getStaticProps = async () => {
  return {
    props: {},
  };
};
