import { View } from "../../types";

export const ToggleView = ({
  view,
  setView,
}: {
  view: View;
  setView: (view: View) => void;
}) => {
  return (
    <div className="flex items-center justify-center my-5 gap-x-3">
      <div className="cursor-pointer">
        <p
          className={`text-xl font-semibold ${
            view === View.grid ? "text-primary" : ""
          }`}
          onClick={() => setView(View.grid)}
        >
          Grid
        </p>
      </div>

      <div className="cursor-pointer">
        <p
          className={`text-xl font-semibold ${
            view === View.list ? "text-primary" : ""
          }`}
          onClick={() => setView(View.list)}
        >
          List
        </p>
      </div>
    </div>
  );
};
