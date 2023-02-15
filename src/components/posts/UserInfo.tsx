import { User } from "../../types";

export const UserInfo = ({ user }: { user: User }) => {
  return (
    <div className="p-5 my-5 font-semibold rounded-lg bg-primary text-light w-fit">
      <h2 className="text-3xl">
        <span className="text-gray-300">name:</span> {user.name}
      </h2>
      <p>
        <span className="text-gray-300">email: </span> {user.email}
      </p>
    </div>
  );
};
