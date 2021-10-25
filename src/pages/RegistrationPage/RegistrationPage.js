import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import operations from "../../redux/auth-operations";
import css from "./RegistrationPage.module.css";

function RegistrationPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const isErrorRegister = useSelector((state) => state.auth.isErrorRegister);
  const isPendingRegister = useSelector((state) => state.auth.isPending);

  const handleNewUser = (e) => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;

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

  const addNewUser = (e) => {
    e.preventDefault();
    dispatch(operations.registerUser({ name, email, password }));

    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <form onSubmit={addNewUser} className={css.wrap}>
      <h2 className={css.title}>Please, enter your registration details</h2>
      <label className={css.label}>
        Name
        <input
          onChange={handleNewUser}
          className={css.input}
          type="text"
          name="name"
          value={name}
        />
      </label>
      <label className={css.label}>
        Email
        <input
          onChange={handleNewUser}
          className={css.input}
          type="mailto"
          name="email"
          value={email}
        />
      </label>
      <label className={css.label}>
        Password
        <input
          onChange={handleNewUser}
          className={css.input}
          type="password"
          name="password"
          value={password}
        />
      </label>
      <button className={css.button} type="submit">
        Sign up
      </button>
      {isPendingRegister && <h3 className={css.message}>Please, wait</h3>}
      {isErrorRegister && (
        <h3 className={css.message}>
          There was an error. Please enter correct data
        </h3>
      )}
    </form>
  );
}
export default RegistrationPage;
