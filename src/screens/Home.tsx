import { useEffect } from "react";

import { Post } from "../types";
import { Posts } from "../components/posts";
import { Screen, SkeletonLoading } from "../components/UI";
import { useApi, useLocalStorage } from "../hooks";
import postsApi from "../api/posts";

export default function Home() {
  const {
    data: posts,
    loading,
    request: getPosts,
  } = useApi<Post[]>(postsApi.getPosts);

  const [localPosts] = useLocalStorage<Post[]>("user_posts");

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
