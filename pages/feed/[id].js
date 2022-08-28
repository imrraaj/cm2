import { getPage, getBlock } from "../../utils/notion";
import MyCustomText from "../../components/Text";
import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import { Container, Title, Text, Box } from "@mantine/core";

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
  console.log("making reqeust from id: ", id);

  const page = await getPage(id);
  const blocks = await getBlock(id);

  console.log(page);
  if (page) {
    return {
      props: {
        id,
        post: page,
        blocks,
        noId: false,
      },
      revalidate: 60,
    };
  } else {
    return {
      props: {
        noId: true,
      },
    };
  }
};

const renderBlock = (block) => {
  const { type, id } = block;
  const value = block[type];
  switch (type) {
    case "heading_1":
      return (
        <Title
          order={1}
          mt="10"
          sx={{ fontWeight: "bold", textDecoration: "underline" }}
        >
          {value?.rich_text[0]?.plain_text}
        </Title>
      );

    case "heading_2":
      return (
        <Title
          order={2}
          mt="10"
          sx={{ fontWeight: "bold", textDecoration: "underline" }}
        >
          {value?.rich_text[0]?.plain_text}
        </Title>
      );

    case "heading_3":
      return (
        <Title
          order={3}
          mt="10"
          sx={{ fontWeight: "bold", textDecoration: "underline" }}
        >
          {value?.rich_text[0]?.plain_text}
        </Title>
      );

    case "paragraph":
      return <MyCustomText text={value?.rich_text[0]} />;

    case "bulleted_list_item":
    case "numbered_list_item":
      return (
        <ul role="list">
          <li>
            <MyCustomText text={value?.rich_text[0]} />
          </li>
        </ul>
      );

    case "to_do":
      return (
        <div>
          <label htmlFor={id}>
            <input type="checkbox" id={id} readOnly />{" "}
            <div className="inline-block">
              <MyCustomText text={value?.rich_text[0]} />
            </div>
          </label>
        </div>
      );

    case "quote":
      return (
        <blockquote className="relative border-l-4 pl-4 sm:pl-6 my-8 dark:border-gray-700">
          <p className="text-white sm:text-xl">
            <em>{value?.rich_text[0]?.plain_text}</em>
          </p>
        </blockquote>
      );

    case "callout":
      return (
        <div className="p-4 bg-primary text-white rounded flex items-center">
          <span className="mr-2">{value?.icon?.emoji}</span>
          <span>{value?.rich_text[0]?.plain_text}</span>
        </div>
      );

    case "image":
      const src =
        value.type === "external" ? value.external.url : value.file.url;
      const caption = value?.caption ? value.caption[0]?.plain_text : "";
      return (
        <figure>
          <Image src={src} alt={caption} width={600} height={200} />
          {caption && <figcaption>{caption}</figcaption>}
        </figure>
      );

    default:
      return "";
  }
};

function Post(props) {
  const router = useRouter();
  if (props.noId) {
    router.push("/");
    return;
  }
  let title, name, date, author;
  if (props.post?.properties?.name?.title[0]?.plain_text) {
    title = props.post.properties.name.title[0].plain_text;
  }
  if (props.post?.properties?.name?.title[0]?.plain_text) {
    name = props.post.properties.name.title[0].plain_text;
  }
  if (props.post?.properties?.date?.date?.start) {
    date = props.post.properties.date.date.start;
  }
  if (props.post?.properties?.author?.select?.name) {
    author = props.post.properties.author.select.name;
  }

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Container
        pt={72}
        sx={{ color: "white", maxWidth: "1024px", margin: "auto" }}
      >
        <Box component="article" mt="lg">
          <Text
            sx={{
              marginBlock: "1.25rem",
              fontSize: "2.5rem",
              fontWeight: "bold",
              lineBreak: "anywhere",
            }}
          >
            {name}
          </Text>
          <Text size="md">
            Published On:{" "}
            <Text component="span" weight="bolder" color="brand">
              {date}
            </Text>
          </Text>
          <Box mt={8} sx={{ minHeight: "50vh" }}>
            {props.blocks?.map((block, index) => {
              return <div key={index}>{renderBlock(block)}</div>;
            })}
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default Post;
