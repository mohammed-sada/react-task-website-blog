import { fetchFromApi } from "../helpers";
import { Post } from "../types";

const endpoint = "posts";

const getPosts = () => fetchFromApi(endpoint);

const createPost = (post: Post) =>
  fetchFromApi(endpoint, {
    method: "Post",
    body: post,
  });

const editPost = async (post: Post, posts: Post[]) => {
  await fetchFromApi(endpoint, {
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

  return newPosts;
};

const deletePost = async (post: Post, posts: Post[]) => {
  await fetchFromApi(`${endpoint}/${post.id}`, {
    // fake
    method: "Delete",
  });

  return posts.filter((p) => p.id !== post.id);
};

const postsApi = {
  getPosts,
  createPost,
  editPost,
  deletePost,
};
export default postsApi;
