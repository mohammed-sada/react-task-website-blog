import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

import { Posts, UserInfo } from "../components/posts";
import { PageLoader, Screen } from "../components/UI";
import { fetchFromApi, isEmptyObject } from "../helpers";
import { Post, User as UserType } from "../types";

export default function User() {
  const navigate = useNavigate();
  const { userId } = useParams();

  const [user, setUser] = useState<UserType | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);

  async function getUserInfo(userId: string) {
    const user: UserType = await fetchFromApi(`users/${userId}`);
    if (!isEmptyObject(user)) setUser(user);
    else {
      toast.error("This is not a real user");
      navigate(-1);
    }
  }
  async function getUserPosts(userId: string) {
    const posts: Post[] = await fetchFromApi(`users/${userId}/posts`);
    setPosts(posts);
  }

  useEffect(() => {
    if (userId) {
      getUserInfo(userId);
      getUserPosts(userId);
    }
  }, [userId]);

  if (posts.length === 0 || !user) return <PageLoader />;
  return (
    <Screen padding>
      <UserInfo user={user} />
      <Posts posts={posts} />
    </Screen>
  );
}
