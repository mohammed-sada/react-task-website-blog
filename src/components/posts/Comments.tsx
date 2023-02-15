import { Comment as CommentType } from "../../types";
import { Comment } from "./Comment";

export const Comments = ({ comments }: { comments: CommentType[] }) => {
  return comments.length > 0 ? (
    <div className="flex flex-col">
      <h2 className="mb-4 text-2xl font-semibold text-primary">Comments</h2>

      {comments.map((comment) => {
        return <Comment key={comment.id} comment={comment} />;
      })}
    </div>
  ) : null;
};
