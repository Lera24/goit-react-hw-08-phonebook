import axios from "axios";
import contactActions from "./contacts-actions";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const fetchContacts = () => async (dispatch) => {
  dispatch(contactActions.fetchContactsRequest());

  try {
    const response = await axios.get("/contacts");
    dispatch(contactActions.fetchContactsSuccess(response.data));
  } catch (error) {
    dispatch(contactActions.fetchContactsError(error.massage));
  }
};

const addContacts =
  ({ name, number }) =>
  (dispatch) => {
    const contact = {
      name,
      number,
    };
    dispatch(contactActions.addContactsRequest());

    axios
      .post("/contacts", contact)
      .then(({ data }) => dispatch(contactActions.addContactsSuccess(data)))
      .catch((error) =>
        dispatch(contactActions.addContactsError(error.massage))
      );
  };

const deleteContacts = (id) => (dispatch) => {
  dispatch(contactActions.deleteContactsRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(contactActions.deleteContactsSuccess(id)))
    .catch((error) =>
      dispatch(contactActions.deleteContactsError(error.massage))
    );
};

const contactOperations = {
  fetchContacts,
  addContacts,
  deleteContacts,
};

export default contactOperations;
