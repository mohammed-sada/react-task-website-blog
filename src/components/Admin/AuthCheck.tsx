import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

export const AuthCheck = ({
  children,
  fallback,
}: {
  children: JSX.Element;
  fallback?: JSX.Element;
}) => {
  const { user } = useContext(AuthContext);

  return user
    ? children
    : fallback || (
        <Link
          to="/login"
          className="flex justify-center px-10 py-20 text-2xl text-center text-primary"
        >
          You must be signed in to access this page!
        </Link>
      );
};
