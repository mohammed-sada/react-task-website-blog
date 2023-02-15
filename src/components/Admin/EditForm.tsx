import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { fetchFromApi } from "../../helpers";
import { Post } from "../../types";
import { Button, Input, Spinner } from "../UI";

export const EditFrom = ({
  initialPost,
  posts,
  setPosts,
}: {
  initialPost: Post;
  posts: Post[];
  setPosts: (posts: Post[]) => void;
}) => {
  const navigate = useNavigate();

  const [post, setPost] = useState<Post>(initialPost);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const result = await fetchFromApi("posts", {
      // fake
      method: "Put",
      body: post,
    });

    const newPosts = posts.map((p) => {
      if (p.id === post.id) {
        return {
          ...p,
          title: post.title,
          body: post.body,
        };
      } else return p;
    });
    setPosts([...newPosts]);
    setLoading(false);
    toast.success("Post updated successfully");
  };

  const deletePost = async () => {
    setLoading(true);
    const result = await fetchFromApi(`posts/${post.id}`, {
      // fake
      method: "Delete",
      body: post,
    });

    const newPosts = posts.filter((p) => p.id !== post.id);
    setPosts([...newPosts]);
    setLoading(false);
    toast.success("Post deleted successfully");
    setTimeout(() => {
      navigate("/admin");
    }, 1000);
  };

  return (
    <div className="py-10 md:w-1/2">
      <form onSubmit={handleSubmit}>
        <Input
          required
          label="title"
          name="title"
          disabled={loading}
          value={post.title}
          onChange={(title) => setPost((prev) => ({ ...prev, title }))}
        />
        <Input
          required
          label="body"
          name="title"
          disabled={loading}
          value={post.body}
          onChange={(body) => setPost((prev) => ({ ...prev, body }))}
        />

        <div className="flex mb-3 gap-x-3">
          <Button
            label="update"
            name="update"
            type="submit"
            styles="bg-secondary"
            disabled={loading}
          />
          <Button
            label="delete"
            name="delete"
            type="button"
            styles="bg-danger"
            disabled={loading}
            onClick={deletePost}
          />
        </div>
        <Button
          label="back"
          name="back"
          type="button"
          disabled={loading}
          styles="bg-dark"
          onClick={() => navigate(-1)}
        />

        {loading && <Spinner />}
      </form>
    </div>
  );
};
