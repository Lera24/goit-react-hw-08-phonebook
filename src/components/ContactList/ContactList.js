import PropTypes from "prop-types";
import css from "./ContactList.module.css";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts &&
        contacts.map((contact) => {
          return (
            <li key={contact.id} className={css.item}>
              <span className={css.name}>{`${contact.name}:`}</span>
              <span className={css.number}>{contact.number}</span>
              <button
                type="submit"
                className={css.button}
                onClick={() => onDeleteContact(contact.id)}
              >
                Delete
              </button>
            </li>
          );
        })}
    </ul>
  );
};
export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
};
