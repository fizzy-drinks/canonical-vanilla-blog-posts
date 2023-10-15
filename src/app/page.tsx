import PostData from "@/types/post";
import Post from "@/components/Post";
import styles from "./page.module.scss";

async function getPostData(): Promise<PostData[]> {
  const data = await fetch(process.env.NEXT_PUBLIC_POST_API_URL as string, {
    cache: "force-cache",
  });
  return data.json();
}

const findFirstTerm = (
  post: PostData,
  property: "group" | "tags" | "categories",
) =>
  post[property]
    .map(
      (id) => post._embedded["wp:term"].flat().find((i) => i.id === id)?.name,
    )
    .shift();

export default async function Home() {
  const posts = await getPostData();

  return (
    <main className={styles.Root}>
      <p>
        Stretch the page around or use the device toolbar to test different
        resolutions!
      </p>
      <div className={`${styles.Container} flex`}>
        {posts.map((post) => (
          <div key={post.id} className={`${styles.CardContainer} flex`}>
            <Post
              title={post.title.rendered}
              date={new Date(post.date)}
              author={post._embedded.author[0]}
              category={findFirstTerm(post, "categories")}
              group={
                findFirstTerm(post, "group") || findFirstTerm(post, "tags")
              }
              imageUrl={post.featured_media}
              postUrl={post.link}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
