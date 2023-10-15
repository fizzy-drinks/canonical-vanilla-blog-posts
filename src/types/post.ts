type Post = {
  id: number;
  link: string;
  date: string;
  title: { rendered: string };
  featured_media: string;
  categories: number[];
  group: number[];
  tags: number[];
  _embedded: {
    author: {
      link: string;
      name: string;
    }[];
    "wp:term": { id: number; name: string }[][];
  };
};

export default Post;
