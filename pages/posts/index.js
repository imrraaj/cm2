import Link from "next/link";
import { getDatabase } from "../../utils/notion";

// export const getStaticProps = async () => {
//   const database = await getDatabase(process.env.NOTION_DATABASE);
//   console.log("making reqeust from posts/ ");
//   console.log(database);
//   return {
//     props: {
//       posts: database,
//     },
//     revalidate: 15,
//   };
// };

function Home({ posts }) {
  return (
    <>
      <section className="mt-20 container">
        <h1 className="mb-4 text-7xl text-primary font-black">Blog</h1>
        <p className="text-lg font-semibold text-paragraph">
          I write about development, design, React, CSS, animation and more!
        </p>
      </section>
      <section>
        {/* {posts.map((post) => {
          const { Name, Author, Date, description } = post?.properties;
          console.log(post);
          return (
            <div
              className="my-7 p-5 border border-primary-100 rounded"
              key={post?.id}
            >
              <Link href={`/posts/${post?.id}`}>
                <h2 className="mb-2 text-3xl font-bold text-primary cursor-pointer">
                  {Name && Name?.title[0]?.plain_text}
                </h2>
              </Link>
              <p className="text-paragraph">
                By{" "}
                <span className="text-primary font-semibold">
                  {Author && Author?.select?.name}
                </span>
              </p>
              <p className="mt-2 text-paragraph font-medium">
                Published On: <span>{Date && Date?.date?.start}</span>
              </p>
              <p className="text-paragraph">
                {description&& description?.rich_text[0]?.plain_text}{" "}
              </p>
            </div>
          );
        })} */}
      </section>
    </>
  );
}

export default Home;
