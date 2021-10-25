import shortid from "shortid";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import contactActions from "../../redux/contacts-actions";
import css from "./Filter.module.css";

function Filter({ filter, onFilter }) {
  const inputFilterId = shortid.generate();

  return (
    <label htmlFor={inputFilterId} className={css.label}>
      Find contacts by name
      <input
        className={css.input}
        onChange={onFilter}
        value={filter}
        type="text"
        id={inputFilterId}
      />
    </label>
  );
}

const mapStateToProps = (state) => ({
  filter: state.contacts.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onFilter: (e) => dispatch(contactActions.filterContacts(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
  filter: PropTypes.string,
  onFilter: PropTypes.func,
};
