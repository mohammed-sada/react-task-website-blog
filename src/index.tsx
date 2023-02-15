import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";

import PageRoutes from "./routes";
import { PageLoader } from "./components/UI";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Suspense fallback={<PageLoader />}>
    <BrowserRouter>
      <PageRoutes />
    </BrowserRouter>
  </Suspense>
);
