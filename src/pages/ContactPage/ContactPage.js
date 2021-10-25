import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { searchFilterContacts } from "../../redux/contacts-selector";
import ContactList from "../../components/ContactList/ContactList";
import ContactForm from "../../components/ContactForm/ContactForm";
import Filter from "../../components/Filter/Filter";
import contactOperations from "../../redux/contacts-operations";
import css from "./ContactPage.module.css";

const ContactPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(searchFilterContacts);
  const deleteContact = (id) => {
    dispatch(contactOperations.deleteContacts(id));
  };

  useEffect(() => dispatch(contactOperations.fetchContacts()), [dispatch]);

  return (
    <div className={css.wrap}>
      <h1 className={css.title}>Add new contact</h1>
      <ContactForm />
      <h2 className={css.subtitle}>Contacts</h2>
      <Filter />
      {contacts && (
        <ContactList contacts={contacts} onDeleteContact={deleteContact} />
      )}
    </div>
  );
};

export default ContactPage;
