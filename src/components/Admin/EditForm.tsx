import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import postsApi from "../../api/posts";

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

  const handleEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const newPosts = await postsApi.editPost(post, posts);
    setPosts([...newPosts]);
    setLoading(false);
    toast.success("Post updated successfully");
  };

  const handleDelete = async () => {
    setLoading(true);

    const newPosts = await postsApi.deletePost(post, posts);
    setPosts([...newPosts]);
    setLoading(false);
    toast.success("Post deleted successfully");

    setTimeout(() => {
      navigate("/admin");
    }, 1000);
  };

  return (
    <div className="py-10 md:w-1/2">
      <form onSubmit={handleEdit}>
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
            onClick={handleDelete}
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
