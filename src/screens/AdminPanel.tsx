import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthCheck, EditFrom } from "../components/Admin";
import { PageLoader, Screen } from "../components/UI";
import { useLocalStorage } from "../hooks";
import { Post } from "../types";

export default function AdminPanel() {
  const navigate = useNavigate();
  const [localPosts, setLocalPosts] = useLocalStorage<Post[] | undefined>(
    "user_posts"
  );
  const [post, setPost] = useState<Post | null | undefined>(null);
  const { postId } = useParams();

  async function getPost(id: string) {
    setPost(localPosts?.find((p) => p.id.toString() === id));
  }
  useEffect(() => {
    if (postId) getPost(postId);
  }, [postId]);

  if (!localPosts || localPosts.length === 0) {
    navigate("/admin");
    return null;
  }
  if (!post) return <PageLoader />;

  return (
    <AuthCheck>
      <Screen padding center>
        <EditFrom
          initialPost={post}
          posts={localPosts}
          setPosts={setLocalPosts}
        />
      </Screen>
    </AuthCheck>
  );
}
