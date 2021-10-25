import { useDispatch, useSelector } from "react-redux";
import authSelectors from "../../redux/auth-selectors";
import operations from "../../redux/auth-operations";
import css from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <div className={css.wrap}>
      <p className={css.user}>{name}</p>
      <button
        className={css.button}
        type="button"
        onClick={() => dispatch(operations.logOutUser())}
      >
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
