import { Card } from "./Card";
import { Post } from "../../types";

export const PostsGridView = ({ posts }: { posts: Post[] }) => {
  return (
    <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => {
        return <Card key={post.id} post={post} />;
      })}
    </div>
  );
};
