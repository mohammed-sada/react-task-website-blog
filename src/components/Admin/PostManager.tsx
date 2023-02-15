import { useState, useContext } from "react";
import { toast } from "react-hot-toast";
import AuthContext from "../../context/AuthContext";

import { fetchFromApi } from "../../helpers";
import { Post } from "../../types";
import { Button, Input, Spinner } from "../UI";

export const PostManager = ({
  posts,
  setPosts,
}: {
  posts: Post[];
  setPosts: (posts: Post[]) => void;
}) => {
  const { user } = useContext(AuthContext);

  const [post, setPost] = useState({
    title: "",
    body: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const result = await fetchFromApi("posts", {
      method: "Post",
      body: post,
    });

    setPosts([
      ...posts,
      { ...result, id: Date.now(), userId: user?.email.split("@")[0] },
    ]); // because this is a fake api, I generated my own id, if I don't then all of the new created posts will get the same id which will result in issues
    setPost({ title: "", body: "" });

    setLoading(false);
    toast.success("Post created successfully");

    setTimeout(() => {
      toast(
        "Please note that this post will not be really saved on a server but it will be faked and get stored on local-storage."
      );
    }, 1000);
  };
  return (
    <div className="py-10 md:w-1/2">
      <form onSubmit={handleSubmit}>
        <Input
          label="title"
          name="title"
          disabled={loading}
          value={post.title}
          onChange={(title) => setPost((prev) => ({ ...prev, title }))}
        />
        <Input
          label="body"
          name="title"
          disabled={loading}
          value={post.body}
          onChange={(body) => setPost((prev) => ({ ...prev, body }))}
        />
        <Button label="Create" name="create" type="submit" disabled={loading} />
        {loading && <Spinner />}
      </form>
    </div>
  );
};
