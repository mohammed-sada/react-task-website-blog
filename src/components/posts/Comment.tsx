import { Comment as CommentType } from "../../types";

export const Comment = ({ comment }: { comment: CommentType }) => {
  return (
    <article className="p-6 mb-6 text-base bg-white rounded-lg">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <p className="inline-flex items-center mr-3 text-sm text-gray-900">
            <img
              className="w-6 h-6 mr-2 rounded-full"
              src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
              alt={comment.email}
            />
            @{comment.email.split("@")[0]}
          </p>
        </div>
      </div>
      <p className="text-gray-500">{comment.body}</p>
    </article>
  );
};
