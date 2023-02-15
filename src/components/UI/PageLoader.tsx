import { Spinner } from ".";

export const PageLoader = () => {
  return (
    <div className="fixed w-full h-full flex justify-center items-center bg-white">
      <Spinner />
    </div>
  );
};
