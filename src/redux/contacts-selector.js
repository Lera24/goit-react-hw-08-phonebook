import { createSelector } from "@reduxjs/toolkit";

export const getFilter = (state) => state.contacts.filter;

export const getContacts = (state) => state.contacts.items;

export const searchFilterContacts = createSelector(
  [getContacts, getFilter],
  (items, filter) => {
    const normalizeFilter = filter.toLowerCase();
    return items.filter(({ name }) =>
      name.toLowerCase().includes(normalizeFilter)
    );
  }
);
