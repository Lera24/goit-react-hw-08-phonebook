import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import contactActions from "./contacts-actions";

const reducerItems = createReducer([], {
  [contactActions.fetchContactsSuccess]: (_, { payload }) => payload,
  [contactActions.fetchContactsError]: (_, { payload }) => payload,
  [contactActions.addContactsSuccess]: (state, { payload }) => [
    payload,
    ...state,
  ],
  [contactActions.addContactsError]: (state, { payload }) => state,
  [contactActions.deleteContactsSuccess]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
  [contactActions.deleteContactsError]: (state, { payload }) => state,
});

const reducerFilter = createReducer("", {
  [contactActions.filterContacts]: (_, { payload }) => payload,
});

const contactsReducer = combineReducers({
  items: reducerItems,
  filter: reducerFilter,
});

export default contactsReducer;
