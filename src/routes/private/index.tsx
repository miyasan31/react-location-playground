import type { Route } from "@tanstack/react-location";
import { Outlet } from "@tanstack/react-location";

import { PrivateLayout } from "~/components/layout/PrivateLayout";
import { MainPage } from "~/components/page/private/main.page";
import { commonRoutes } from "~/routes/common";

export const privateRoutes: Route[] = [
  {
    path: "/",
    element: (
      <PrivateLayout>
        <Outlet />
      </PrivateLayout>
    ),
    children: [
      {
        path: "main",
        element: <MainPage />,
      },
      ...commonRoutes,
    ],
  },
];
