import { Box, Container, Grid, Text, Title } from "@mantine/core";
import Link from "next/link";
import { getDatabase } from "../../utils/notion";
import { createStyles, Avatar, Group } from "@mantine/core";
import { BsFillPersonLinesFill, BsCalendarDate } from "react-icons/bs";
import { IconBookmark, IconHeart, IconShare } from '@tabler/icons';
import {
  Card,
  Image,
  ActionIcon,
  Badge,
  Center,
} from '@mantine/core';


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
            author,
            date,
            description,
            id: post.id,
          };

          return (
            <Grid.Col key={"posts/" + post.id} span={12} lg={4} style={{ cursor: "pointer" }} my={32}>

              <ArticleCard {...data} />
            </Grid.Col>
          );
        })}
      </Grid>
    </Container>
  );
}

export default Home;

const useStyles = createStyles((theme) => ({
  icon: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[3]
        : theme.colors.gray[5],
  },

  name: {
    fontFamily: `${theme.fontFamily}`,
  },
}));

export function UserInfoIcons({
  avatar,
  author,
  title,
  date,
  description,
  id,
}) {
  const { classes } = useStyles();
  const data = {
    "image": "https://i.imgur.com/Cij5vdL.png",
    "link": "https://mantine.dev/",
    "title": "Resident Evil Village review",
    "rating": "outstanding",
    "description": "Resident Evil Village is a direct sequel to 2017’s Resident Evil 7, but takes a very different direction to its predecessor, namely the fact that this time round instead of fighting against various mutated zombies, you’re now dealing with more occult enemies like werewolves and vampires.",
    "author": {
      "name": "Bill Wormeater",
      "image": "https://images.unsplash.com/photo-1593229874334-90d965f27c42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    }
  }

  return (
    <div>
      <ArticleCard {...data} />
      {/* <Group noWrap>
        <Avatar src={avatar} size={150} radius="xs" />
        <Box p={16}>
          <Text size={28} weight="bolder" color="white">
            {title && title?.title[0]?.plain_text}
          </Text>

          <Text size="lg" weight={500} color="white">
            {description && description?.rich_text[0]?.plain_text}
          </Text>

          <Group noWrap spacing={10} mt={3}>
            <BsFillPersonLinesFill size={16} className={classes.icon} />
            <Text size="md" color="dimmed">
              {author && author?.select?.name}
            </Text>
          </Group>

          <Group noWrap spacing={10} mt={5}>
            <BsCalendarDate size={16} className={classes.icon} />
            <Text size="md" color="dimmed">
              {date && date?.date?.start}
            </Text>
          </Group>
        </Box>
      </Group> */}
    </div>
  );
}






const useStyles2 = createStyles((theme) => ({
  card: {
    position: 'relative',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  rating: {
    position: 'absolute',
    top: theme.spacing.xs,
    right: theme.spacing.xs + 2,
    pointerEvents: 'none',
  },

  title: {
    display: 'block',
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.xs / 2,
  },

  action: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    ...theme.fn.hover({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
    }),
  },

  footer: {
    marginTop: theme.spacing.md,
  },
}));



export function ArticleCard({
  avatar,
  title,
  author,
  date,
  description,
  id,
}) {
  const { classes, theme } = useStyles2();
  return (
    <Card withBorder radius="md" className={classes.card}>
      <Card.Section>
        <Image src={avatar} height={180} />
      </Card.Section>

      <Link href={"posts/" + id}>
        <Text className={classes.title} weight="bold" size={24}>
          {title && title?.title[0]?.plain_text}
        </Text>
      </Link>
      <Text size="md" color="dimmed" lineClamp={4} weight="bold">
        {description && description?.rich_text[0]?.plain_text}
      </Text>

      <Group position="apart" className={classes.footer}>
        <Center>
          <Text size="md" inline weight="bold">
            {author && author?.select?.name}
          </Text>
        </Center>

        <Group spacing={8} mr={0}>
          <ActionIcon className={classes.action}>
            <IconHeart size={16} color={theme.colors.red[6]} />
          </ActionIcon>
          <ActionIcon className={classes.action}>
            <IconBookmark size={16} color={theme.colors.yellow[7]} />
          </ActionIcon>
          <ActionIcon className={classes.action}>
            <IconShare size={16} />
          </ActionIcon>
        </Group>
      </Group>
    </Card>
  );
}