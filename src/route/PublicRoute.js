import { Redirect, Route } from "react-router";
import { useSelector } from "react-redux";
import authSelectors from "../redux/auth-selectors";

export default function PublicRoute({
  children,
  restricted = false,
  redirectTo = "/",
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const onRedirect = isLoggedIn && restricted;
  return (
    <Route {...routeProps}>
      {onRedirect ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
}
