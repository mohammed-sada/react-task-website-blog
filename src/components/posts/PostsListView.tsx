import { Card } from "./Card";
import { Post } from "../../types";

export const PostsListView = ({ posts }: { posts: Post[] }) => {
  return (
    <div className="flex flex-col justify-center gap-2">
      {posts.map((post) => {
        return <Card key={post.id} post={post} />;
      })}
    </div>
  );
};
