import { Container, Grid, Title, Box, Center, Stack } from "@mantine/core";
import Image from "next/image";

export default function Collab({ Ref }) {
  return (
    <Container my={32} ref={Ref}>
      <Title align="center" mb={32} style={{ color: "white" }}>
        Our Sponsers
      </Title>
      <Grid grow justify="center" align="center">
        <Grid.Col span={6} lg={4}>
          <img src="/angelic.jpg" alt="me" />
        </Grid.Col>

        <Grid.Col span={6} lg={4}>
          <img src="/ascend.png" alt="alt text" />
        </Grid.Col>
        <Grid.Col span={6} lg={4}>
          <img src="/bomb_crypto.png" alt="alt text" />
        </Grid.Col>
        <Grid.Col span={6} lg={4}>
          <img src="/coinw.png" alt="alt text" />
        </Grid.Col>
        <Grid.Col span={6} lg={4}>
          <img src="/ga.jpeg" alt="alt text" />
        </Grid.Col>
        <Grid.Col span={6} lg={4}>
          <img src="/k.png" alt="alt text" />
        </Grid.Col>
        <Grid.Col span={6} lg={4}>
          <img src="/ku.png" alt="alt text" />
        </Grid.Col>
        <Grid.Col span={6} lg={4}>
          <img src="/meta.jpeg" alt="alt text" />
        </Grid.Col>

        <Grid.Col span={6} lg={4}>
          <img src="/mexc2.jpeg" alt="alt text" />
        </Grid.Col>

        <Grid.Col span={6} lg={4}>
          <img src="/rbi.png" alt="alt text" />
        </Grid.Col>
        <Grid.Col span={6} lg={4}>
          <img src="/rg.png" alt="alt text" />
        </Grid.Col>

        <Grid.Col span={6} lg={4}>
          <img src="/tc.png" alt="alt text" />
        </Grid.Col>
        <Grid.Col span={6} lg={4} hidden>
          <img src="/Rice Wallet.png" alt="alt text" />
        </Grid.Col>
      </Grid>
    </Container>
  );
}
