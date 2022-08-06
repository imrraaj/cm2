import { getPage, getBlock } from "../../utils/notion";

import { Text } from "../../components/Text";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { Container } from "@mantine/core";

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
        <h1 className="mt-10 text-emerald-500 text-5xl font-bold w-fit underline">
          {value?.rich_text[0]?.plain_text}
        </h1>
      );

    case "heading_2":
      return (
        <h2 className="mt-10 text-emerald-500 text-4xl font-bold w-fit underline">
          {value?.rich_text[0]?.plain_text}
        </h2>
      );

    case "heading_3":
      return (
        <h3 className="mt-10 text-emerald-500 text-3xl font-bold w-fit underline">
          {value?.rich_text[0]?.plain_text}
        </h3>
      );

    case "paragraph":
      return <Text text={value?.rich_text[0]} />;

    case "bulleted_list_item":
    case "numbered_list_item":
      return (
        <ul role="list" className="list-disc ml-4">
          <li className="">
            <Text text={value?.rich_text[0]} />
          </li>
        </ul>
      );

    case "to_do":
      return (
        <div>
          <label htmlFor={id}>
            <input type="checkbox" id={id} readOnly />{" "}
            <div className="inline-block">
              <Text text={value?.rich_text[0]} />
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

    // case "toggle":
    //   console.log(value);
    //   return (
    //     <details>
    //       <summary>{value.rich_text[0].plain_text}</summary>
    //       {value.children?.map((block: any) => (
    //         <div key={block.id}>{renderBlock(block)}</div>
    //       ))}
    //     </details>
    //   );

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
      return null;
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
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>

      <Link href="/posts">
        <span className="block my-10 text-md underline font-semibold text-emerald-500 cursor-pointer">
          Go back
        </span>
      </Link>

      <Container>
        <article className="my-10 pb-2 text-white">
          <h1 className="text-4xl font-bold text-emerald-500">{name}</h1>

          <p className="mt-2 text-white">
            By <span className="text-emerald-500 font-semibold">{author}</span>
          </p>
          <p className="mt-2 text-white">
            Published On: <span className="text-emerald-500">{date}</span>
          </p>
          <section className="mt-8">
            {props.blocks?.map((block, index) => {
              return <div key={index}>{renderBlock(block)}</div>;
            })}
          </section>
        </article>
      </Container>

      <div className="w-full flex items-center justify-center">
        <button className="bg-primary hover:bg-primary/70 text-white rounded-full px-6 py-2 cursor-pointer">
          <Link href="/posts">
            <span>Back to posts</span>
          </Link>
        </button>
      </div>
    </>
  );
}

export default Post;