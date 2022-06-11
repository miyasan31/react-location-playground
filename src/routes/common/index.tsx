import type { Route } from "@tanstack/react-location";

import { NotFoundPage } from "~/components/page/common/404.page";

export const commonRoutes: Route[] = [
  {
    path: "/*",
    element: <NotFoundPage />,
  },
];
