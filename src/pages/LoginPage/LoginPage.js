import css from "./LoginPage.module.css";
import operations from "../../redux/auth-operations";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const isPendingLogin = useSelector((state) => state.auth.isPending);
  const isErrorLogin = useSelector((state) => state.auth.isErrorLogin);

  const handleUser = (e) => {
    switch (e.target.name) {
      case "email":
        setEmail(e.target.value);
        break;

      case "password":
        setPassword(e.target.value);
        break;

      default:
        return;
    }
  };

  const findUser = (e) => {
    e.preventDefault();
    dispatch(operations.logInUser({ email, password }));

    setEmail("");
    setPassword("");
  };

  return (
    <form className={css.wrap} onSubmit={findUser}>
      <h2 className={css.title}>
        To sign in, enter your username and password
      </h2>
      <label className={css.label}>
        Email
        <input
          className={css.input}
          name="email"
          type="mailto"
          onChange={handleUser}
          value={email}
        />
      </label>
      <label className={css.label}>
        Password
        <input
          className={css.input}
          name="password"
          type="password"
          onChange={handleUser}
          value={password}
        />
      </label>
      <button className={css.button} type="submit">
        Sign in
      </button>
      {isPendingLogin && <h3 className={css.message}>Please, wait</h3>}
      {isErrorLogin && (
        <h3 className={css.message}>
          There was an error. Please enter correct data
        </h3>
      )}
    </form>
  );
};

export default LoginPage;
