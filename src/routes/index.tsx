import { ReactLocation, Router } from "@tanstack/react-location";

import { Outlet } from "~/components/lib/Outlet";
import { useAuth } from "~/libs/hooks/useAuth";
import { privateRoutes } from "~/routes/private";
import { publicRoutes } from "~/routes/public";

const location = new ReactLocation();

const AppRoutes = () => {
  const auth = useAuth();

  const routes = auth.isSignIn ? privateRoutes : publicRoutes;

  return (
    <Router routes={routes} location={location}>
      <Outlet />
    </Router>
  );
};

export default AppRoutes;
