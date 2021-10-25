import { createAction } from "@reduxjs/toolkit";

const fetchContactsRequest = createAction("contacts/fetchContactsRequest");
const fetchContactsSuccess = createAction("contacts/fetchContactsSuccess");
const fetchContactsError = createAction("contacts/fetchContactsError");

const addContactsRequest = createAction("contacts/addContactsRequest");
const addContactsSuccess = createAction("contacts/addContactsSuccess");
const addContactsError = createAction("contacts/addContactsError");

const deleteContactsRequest = createAction("contacts/deleteContactsRequest");
const deleteContactsSuccess = createAction("contacts/deleteContactsSuccess");
const deleteContactsError = createAction("contacts/deleteContactsError");

const filterContacts = createAction("contacts/filterContacts");

const contactActions = {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  deleteContactsRequest,
  deleteContactsSuccess,
  deleteContactsError,
  filterContacts,
};

export default contactActions;
