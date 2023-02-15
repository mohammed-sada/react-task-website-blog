import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="py-4 bg-black text-white shadow h-[125px]">
      <div className="relative flex-col items-center w-11/12 mx-auto lg:w-10/12">
        <div className="flex items-center justify-center gap-3 my-3 text-sm capitalize">
          <li>
            <Link to={"terms"}>
              <span className={`cursor-pointer mr-4 hover:underline`}>
                terms
              </span>
            </Link>
          </li>

          <li>
            <Link to={"privacy"}>
              <span className={`cursor-pointer hover:underline`}>policy</span>
            </Link>
          </li>
        </div>
      </div>

      <span className="block pt-4 text-sm text-center">copy right</span>
    </footer>
  );
};
