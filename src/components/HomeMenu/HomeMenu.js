import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import authSelectors from "../../redux/auth-selectors";
import css from "./HomeMenu.module.css";

const HomeMenu = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      <NavLink
        exact
        to="/"
        className={css.link}
        activeClassName={css.activeLink}
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/contacts"
          className={css.link}
          activeClassName={css.activeLink}
        >
          My contacts
        </NavLink>
      )}
    </>
  );
};

export default HomeMenu;
