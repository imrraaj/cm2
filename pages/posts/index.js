import { Box, Container, Grid, Text, Title } from "@mantine/core";
import Link from "next/link";
import { getDatabase } from "../../utils/notion";
import { createStyles, Avatar, Group } from "@mantine/core";
import { BsFillPersonLinesFill, BsCalendarDate } from "react-icons/bs";

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
          <Title order={1} mb={4} sx={{ color: "white" }}>
            Error Occured on Server
          </Title>
        </Box>
      </Container>
    );
  }
  return (
    <Container pt={64}>
      <Box my={32}>
        <Title order={1} mb={4} sx={{ color: "white" }}>
          Blog
        </Title>
        <Text weight="bolder" sx={{ color: "white" }}>
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
            <Grid.Col key={"posts/" + post.id} span={12}>
              <UserInfoIcons {...data} />
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
  return (
    <div>
      <Group noWrap>
        <Avatar src={avatar} size={150} radius="xs" />
        <Box
          p={16}
          // sx={{ border: "2px solid gray", borderRadius: 12, width: "100%" }}
        >
          <Link href={"posts/" + id}>
            <Text size="xl" weight={700} color="white">
              {title && title?.title[0]?.plain_text}
            </Text>
          </Link>
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
      </Group>
    </div>
  );
}
