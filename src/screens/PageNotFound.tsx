import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="relative flex flex-col items-center justify-center py-[100px]">
      <img
        src={"/assets/404.svg"}
        width={400}
        height={350}
        alt="Page not found"
      />
      <h2 className="text-xl font-semibold text-[#2f3640] mt-8 flex md:flex-row flex-col items-center gap-1 ">
        Back
        <Link to={"/"}>
          <span className="text-lg underline text-primary">Home</span>
        </Link>
      </h2>
    </div>
  );
}
