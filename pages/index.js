import React, { useEffect } from "react";
import Banner from "../components/Banner";
import About from "../components/About";
import Services from "../components/Services";
import Stats from "../components/Stats";
import Collab from "../components/Collab";
import Faqs from "../components/Faqs";

import { Button, Paper, Text, Group, CloseButton } from "@mantine/core";

export default function Home() {
  function CookiesBanner() {
    return (
      <Paper
        withBorder
        p="lg"
        radius="md"
        shadow="md"
        style={{
          maxWidth: "40ch",
          zIndex: 20,
          position: "fixed",
          top: "75px",
          right: "0",
        }}
      >
        <Group position="apart" mb="xs">
          <Text size="md" weight={500}>
            Allow cookies
          </Text>
          <CloseButton mr={-9} mt={-9} />
        </Group>
        <Text color="dimmed" size="xs">
          WE have something exciting to tell you!
        </Text>
        <Group position="right" mt="xs">
          <Button
            variant="default"
            size="xs"
            onClick={() => setShowCookie(false)}
          >
            Preferences
          </Button>
          <Button
            variant="outline"
            size="xs"
            onClick={() => setShowCookie(false)}
          >
            Accept all
          </Button>
        </Group>
      </Paper>
    );
  }

  const [showCookie, setShowCookie] = React.useState(false);

  useEffect(() => {
    setShowCookie(true);
    setTimeout(() => setShowCookie(false), 7000);
  }, []);
  return (
    <main style={{ position: "relative" }}>
      {showCookie && <CookiesBanner />}
      <Banner />
      <Stats />
      <Services />
      <Collab />
      <Faqs />
    </main>
  );
}
