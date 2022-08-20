import { Box, Container, Grid, Text, Title } from "@mantine/core";
import Link from "next/link";
import { getDatabase } from "../../utils/notion";
import { createStyles, Avatar, Group } from "@mantine/core";
import { BsFillPersonLinesFill, BsCalendarDate } from "react-icons/bs";
import { IconBookmark, IconHeart, IconShare } from "@tabler/icons";
import { Card, Image, ActionIcon, Badge, Center } from "@mantine/core";

export const getStaticProps = async () => {
  try {
    const database = await getDatabase(process.env.NOTION_DATABASE);
    console.log("making reqeust from posts/ ");
    return {
      props: {
        posts: database,
      },
      revalidate: 60,
    };
  } catch (e) {
    console.error(e);
    return {
      props: {
        posts: {},
      },
      revalidate: 60,
    };
  }
};

function Home({ posts }) {
  if (!posts) {
    return (
      <Container pt={64}>
        <Box my={32}>
          <Text size="xl" mb={4} color="white">
            Error Occured on Server
          </Text>
        </Box>
      </Container>
    );
  }
  return (
    <Container pt={64}>
      <Box my={32}>
        <Text size={64} weight="bold" mb={4} color="white">
          Feed
        </Text>
        <Text weight="bolder" size="xl" color="white">
          I write about development, design, React, CSS, animation and more!
        </Text>
      </Box>

      <Grid>
        {posts.map((post) => {
          const { name, author, date, description, media } = post?.properties;
          const data = {
            avatar:
              media?.files?.file?.url ||
              "https://images.unsplash.com/photo-1626202378343-1e8b2a828a78",
            title: name,
            date,
            description,
            id: post.id,
          };

          return (
            <Grid.Col
              key={"posts/" + post.id}
              span={12}
              lg={4}
              style={{ cursor: "pointer" }}
              my={32}
            >
              <ArticleCard {...data} />
            </Grid.Col>
          );
        })}
      </Grid>
    </Container>
  );
}

export default Home;

const useStyles2 = createStyles((theme) => ({
  card: {
    width: "100%",
    position: "relative",
    backgroundColor: theme.colors.yellow[0],
  },

  rating: {
    position: "absolute",
    top: theme.spacing.xs,
    right: theme.spacing.xs + 2,
    pointerEvents: "none",
  },

  title: {
    color: theme.colors.yellow[9],
    lineBreak: "anywhere",
    fontWeight: "700",
    fontSize: "1.5rem",
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.xs / 2,
  },
  footer: {
    fontWeight: 600,
    color: theme.colors.yellow[7],
    marginTop: theme.spacing.md,
  },
}));

export function ArticleCard({ avatar, title, date, author, description, id }) {
  const { classes, theme } = useStyles2();
  return (
    <Link href={"feed/" + id}>
      <Card radius="md" className={classes.card}>
        <Card.Section>
          <Image src={avatar} height={180} alt={title?.title[0]?.plain_text || ""} />
        </Card.Section>

        <Text className={classes.title}>
          {title && title?.title[0]?.plain_text}
        </Text>

        <Text size="md" lineClamp={4}>
          {description && description?.rich_text[0]?.plain_text}
        </Text>

        <Group position="apart">
          <Text className={classes.footer}>{date && date.date.start}</Text>
        </Group>
      </Card>
    </Link>
  );
}
