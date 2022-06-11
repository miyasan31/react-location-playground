import type { Route } from "@tanstack/react-location";

import { NestPostDetailPage } from "~/components/page/public/nest-posts/post-detail.page";
import { FetchProvider } from "~/components/provider/Fetch";

export const nestPostsRoutes: Route[] = [
  {
    path: ":postId",
    element: (
      <FetchProvider>
        <NestPostDetailPage />
      </FetchProvider>
    ),
  },
];
