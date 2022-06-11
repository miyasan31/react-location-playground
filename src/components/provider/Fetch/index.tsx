import type { FC, ReactNode } from "react";

import { ReactErrorBoundary } from "~/components/provider/ErrorBoundary";
import { ReactSuspense } from "~/components/provider/Suspense";

type Props = {
  children: ReactNode;
};

export const FetchProvider: FC<Props> = ({ children }) => {
  return (
    <ReactErrorBoundary>
      <ReactSuspense>
        <>{children}</>
      </ReactSuspense>
    </ReactErrorBoundary>
  );
};
