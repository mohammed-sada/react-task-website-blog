import { AuthCheck, PostManager } from "../components/Admin";
import { Posts } from "../components/posts";
import { Screen } from "../components/UI";
import { useLocalStorage } from "../hooks";
import { Post } from "../types";

export default function Admin() {
  const [posts, setPosts] = useLocalStorage<Post[]>("user_posts", []);

  return (
    <AuthCheck>
      <Screen padding>
        <div>
          <PostManager posts={posts} setPosts={setPosts} />
          <Posts posts={posts} />
        </div>
      </Screen>
    </AuthCheck>
  );
}
