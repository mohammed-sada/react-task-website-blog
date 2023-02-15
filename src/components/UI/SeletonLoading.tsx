export const SkeletonLoading = () => {
  return (
    <div className="px-10 py-20">
      <div className="relative grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((item) => {
          return <SkeletonCard key={item} />;
        })}
      </div>
    </div>
  );
};

function SkeletonCard() {
  return (
    <div className="flex flex-col shadow-md rounded-3xl">
      <div className="px-4 pt-8 pb-4 mt-auto">
        <p className="mt-2 bg-[gray] skeleton skeleton-text"></p>
        <p className="mt-2 bg-[gray] skeleton skeleton-text"></p>
        <p className="mt-2 bg-[gray] skeleton skeleton-text"></p>
        <p className="mt-2 bg-[gray] skeleton skeleton-text w-3/4"></p>
        <p className="mt-2 bg-[gray] skeleton skeleton-text w-1/3"></p>
      </div>
    </div>
  );
}
