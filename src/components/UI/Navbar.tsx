import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { Screen } from "./";

const links = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
];

export const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <Screen styles="bg-black">
      <div className="text-white flex gap-x-6 items-center h-[70px] flex-nowrap">
        {links.map((link) => (
          <Link key={link.id} to={link.path} className="font-semibold">
            {link.name}
          </Link>
        ))}

        {user ? (
          <>
            <Link to="/admin" className="font-semibold">
              {`@${user.email.split("@")[0]}`}
            </Link>
            <Link to="/login" className="font-semibold" onClick={logout}>
              Logout
            </Link>
          </>
        ) : (
          <Link to="/login" className="font-semibold">
            Login
          </Link>
        )}
      </div>
    </Screen>
  );
};
