import { Redirect, Route } from "react-router";
import { useSelector } from "react-redux";
import { isAuthenticatedSelector } from "../Store/Authentication/selectors";
import { ROUTES } from "./constants";

export const PrivateRoute = ({ ...rest }) => {
  const isAuthenticated = useSelector(isAuthenticatedSelector);

  return isAuthenticated ? (
    <Route {...rest} />
  ) : (
    <Redirect to={ROUTES.SIGNIN} />
  );
};
