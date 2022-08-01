import { Container, Grid, Title } from "@mantine/core";
import Image from "next/image";

const data = [
  { src: "/kucoin.png", alt: "kucoin" },
  { src: "/ascend.png", alt: "ascend" },
  { src: "/mexc.png", alt: "Mexc Global" },
  { src: "/tokocrypto.png", alt: "Toko Crypto" },
  { src: "/k.png", alt: "K" },
  { src: "/RG.png", alt: "RG" },
  { src: "/bombcrypto.png", alt: "Bomb Crypto" },
  { src: "/angelic.jpg", alt: "Angelic" },
  { src: "/rbitau.png", alt: "RBITAU" },
  { src: "/ricewallet.png", alt: "Rice Wallet" },
  { src: "/metagear.png", alt: "Meta Gear" },
];
export default function Collab() {
  return (
    <Container my={32}>
      <Title align="center" mb={32} style={{ color: "white" }}>
        Clients
      </Title>
      <Grid grow justify="center" align="center">
        {data.map(({ src, alt }) => (
          <Grid.Col
            key={src}
            span={6}
            lg={4}
            sx={{
              filter: "grayscale(100%)",
              transition: "filter 250ms ease-in",

              "&:hover": {
                filter: "grayscale(0%)",
              },
            }}
          >
            <Image
              src={src}
              alt={alt}
              width="250%"
              height="100%"
              style={{display:"block",objectFit:"contain"}}
            />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}
