import { useState } from "react";

import { Post, View } from "../../types";
import { PostsGridView } from "./PostsGridView";
import { PostsListView } from "./PostsListView";
import { ToggleView } from "./ToggleView";

export const Posts = ({ posts }: { posts: Post[] }) => {
  const [view, setView] = useState<View>(View.grid);

  return (
    <div>
      {posts.length > 0 ? <ToggleView view={view} setView={setView} /> : null}

      {view === View.grid ? (
        <PostsGridView posts={posts} />
      ) : (
        <PostsListView posts={posts} />
      )}
    </div>
  );
};
