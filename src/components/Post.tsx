import { format } from "date-fns";
import Image from "next/image";
import { FC } from "react";
import PostStyle from "./Post.module.scss";

const Post: FC<{
  title: string;
  category?: string;
  imageUrl: string;
  author: {
    name: string;
    link: string;
  };
  date: Date;
  group?: string;
  postUrl: string;
}> = ({ title, category, imageUrl, author, date, group, postUrl }) => {
  return (
    <article className={`p-card u-no-padding ${PostStyle.Card} flex column`}>
      <aside className={`${PostStyle.Header} p-text--small`}>{group}</aside>
      <div className={PostStyle.Separator} />
      <div className={`${PostStyle.CardBody} p-card__inner`}>
        <Image
          className="p-card__image"
          src={imageUrl}
          alt={title}
          width={960}
          height={540}
        />
        <h1 className="p-heading--4">
          <a href={postUrl} target="_blank" rel="noreferrer">
            {title}
          </a>
        </h1>
        <p className="u-no-padding--top">
          <em>
            By{" "}
            <a href={author.link} target="_blank" rel="noreferrer">
              {author.name}
            </a>{" "}
            on {format(date, "dd MMMM yyyy")}
          </em>
        </p>
      </div>
      <div className={PostStyle.Separator} />
      <aside className={`p-text--small ${PostStyle.Footer}`}>{category}</aside>
    </article>
  );
};

export default Post;
