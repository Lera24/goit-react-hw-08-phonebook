import { Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, Suspense } from "react";

import MainMenu from "./components/MainMenu/MainMenu";
import HomePage from "./pages/HomePage/HomePage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import authOperations from "./redux/auth-operations";
import PrivateRoute from "./route/PrivateRoute";
import PublicRoute from "./route/PublicRoute";
import authSelectors from "./redux/auth-selectors";
import "./App.css";

export default function App() {
  const dispatch = useDispatch();
  const isRefreshingCurrentUser = useSelector(
    authSelectors.getIsRefreshingUser
  );

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isRefreshingCurrentUser && (
      <>
        <MainMenu />

        <Switch>
          <Suspense fullback={<h1>Please, wait</h1>}>
            <PublicRoute path="/" exact>
              <HomePage />
            </PublicRoute>

            <PrivateRoute path="/contacts" exact redirectTo="/login">
              <ContactPage />
            </PrivateRoute>

            <PublicRoute path="/register" exact restricted>
              <RegistrationPage />
            </PublicRoute>

            <PublicRoute path="/login" exact redirectTo="/contacts" restricted>
              <LoginPage />
            </PublicRoute>
          </Suspense>
        </Switch>
      </>
    )
  );
}
