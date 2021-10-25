import { useSelector } from "react-redux";
import HomeMenu from "../HomeMenu/HomeMenu";
import UserMenu from "../UserMenu/UserMenu";
import AuthMenu from "../AuthMenu/AuthMenu";
import authSelectors from "../../redux/auth-selectors";
import css from "./MainMenu.module.css";

const MainMenu = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header className={css.header}>
      <HomeMenu />
      {isLoggedIn ? <UserMenu /> : <AuthMenu />}
    </header>
  );
};

export default MainMenu;
