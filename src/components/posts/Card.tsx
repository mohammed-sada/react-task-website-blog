import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { Post } from "../../types";
import { Button } from "../UI";

export const Card = ({ post }: { post: Post }) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { pathname } = useLocation();
  const showUser = !pathname.includes("/user");

  return (
    <div className="flex flex-col flex-grow w-full p-5 mb-5 bg-white border border-gray-200 rounded-lg shadow-md">
      <Link to={`/posts/${post.id}`}>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {post.title.slice(0, 25)}
          {post.title.length > 25 ? "..." : ""}
        </h5>

        {post.body ? (
          <p className="mb-3 font-normal text-gray-700">
            {post.body.slice(0, 130)}
            {post.body.length > 130 ? (
              <span className="text-primary"> ...more</span>
            ) : (
              ""
            )}
          </p>
        ) : null}
      </Link>

      {showUser ? (
        <p className="mt-auto text-medium">
          user:{" "}
          <Link to={`/user/${post.userId}`} className="text-primary">
            @{post.userId}
          </Link>
        </p>
      ) : null}

      {user?.email.split("@")[0] === post.userId ? (
        <div className="flex justify-center mt-3 gap-x-3">
          <Button
            name="manage-post"
            label="manage"
            onClick={() => navigate(`/admin/${post.id}`)}
            styles="bg-secondary w-fit px-4"
          />
        </div>
      ) : null}
    </div>
  );
};
