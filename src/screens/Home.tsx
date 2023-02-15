import { useEffect, useState } from "react";

import { Post } from "../types";
import { fetchFromApi } from "../helpers";
import { Posts } from "../components/posts";
import { Screen, SkeletonLoading } from "../components/UI";
import { useLocalStorage } from "../hooks";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const [localPosts] = useLocalStorage<Post[]>("user_posts");

  async function getPosts() {
    setLoading(true);
    const posts: Post[] = await fetchFromApi("posts");
    setPosts(posts);
    setLoading(false);
  }

  useEffect(() => {
    getPosts();
  }, []);

  if (loading) return <SkeletonLoading />;

  const allPosts = localPosts?.concat(posts) || posts;
  return (
    <Screen padding>
      <Posts posts={allPosts} />
    </Screen>
  );
}
