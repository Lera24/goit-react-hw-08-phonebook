import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <>
      <div className={css.wrap}>
        <h2 className={css.title}>Welcome in Phonebook</h2>
        <p className={css.subtitle}>Start creating your contact book now</p>
      </div>
    </>
  );
};

export default HomePage;
