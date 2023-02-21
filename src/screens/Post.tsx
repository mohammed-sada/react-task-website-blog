import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchFromApi, isEmptyObject } from "../helpers";
import { PageLoader, Screen } from "../components/UI";
import { Comment, Post } from "../types";
import { useLocalStorage } from "../hooks";
import { Comments, PostInfo } from "../components/posts";

export default function SinglePost() {
  const [localPosts] = useLocalStorage<Post[] | undefined>("user_posts");
  const { id } = useParams();

  const [post, setPost] = useState<Post | null | undefined>(null);
  const [comments, setComments] = useState<Comment[]>([]);

  async function getPost(id: string) {
    const post: Post = await fetchFromApi(`posts/${id}`);
    if (!isEmptyObject(post)) setPost(post);
    else {
      setPost(localPosts?.find((p) => p.id.toString() === id));
    }
  }
  async function getPostComments(postId: string) {
    const comments: Comment[] = await fetchFromApi(`posts/${postId}/comments`);
    setComments(comments);
  }

  useEffect(() => {
    if (id) {
      getPost(id);
      getPostComments(id);
    }
  }, [id]);

  if (!post) return <PageLoader />;

  return (
    <Screen>
      <PostInfo post={post} />
      <Comments comments={comments} />
    </Screen>
  );
}
