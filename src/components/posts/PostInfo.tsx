import { Link } from "react-router-dom";
import { Post } from "../../types";

export const PostInfo = ({ post }: { post: Post }) => {
  return (
    <div className="flex items-center justify-center pt-20 pb-5">
      <div className="flex flex-col flex-grow p-5 mb-5 bg-white border border-gray-200 rounded-lg shadow-md">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {post.title}
        </h5>

        <p className="mb-3 font-normal text-gray-700">{post.body}</p>

        <p className="mt-auto text-medium">
          user:{" "}
          <Link to={`/user/${post.userId}`} className="text-primary">
            @{post.userId}
          </Link>
        </p>
      </div>
    </div>
  );
};
