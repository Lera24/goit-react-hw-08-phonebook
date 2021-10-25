import { NavLink } from "react-router-dom";
import css from "./AuthMenu.module.css";

const AuthMenu = () => {
  return (
    <>
      <NavLink
        to="/register"
        className={css.link}
        activeClassName={css.activeLink}
      >
        Registration
      </NavLink>
      <NavLink
        to="/login"
        className={css.link}
        activeClassName={css.activeLink}
      >
        Sign in
      </NavLink>
    </>
  );
};

export default AuthMenu;
