import { createSelector } from '@reduxjs/toolkit';

// auth
export const selectorToken = ({ auth }) => auth.token;
export const selectorIsLogin = ({ auth }) => auth.isLogin;
export const selectorName = ({ auth }) => auth.user.name;
export const selectorEmail = ({ auth }) => auth.user.email;

// contacts
export const selectIsLoading = ({ contacts }) => contacts.isLoading;
export const selectError = ({ contacts }) => contacts.error;
export const selectFilter = ({ filter }) => filter;

export const selectContacts = ({ contacts }) =>
  [...contacts.items].sort((a, b) => a.name.localeCompare(b.name));

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    if (!filter) {
      return contacts;
    }
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(
      ({ name, number }) =>
        name.toLowerCase().trim().includes(normalizedFilter) ||
        number.trim().includes(normalizedFilter)
    );
    return filteredContacts;
  }
);
