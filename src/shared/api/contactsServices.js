import { authInstance } from './authServices';

export const getAllContacts = () => authInstance.get('/contacts');

export const addContact = data => {
  return authInstance.post('/contacts', { ...data });
};

export const deleteContact = id => {
  return authInstance.delete(`/contacts/${id}`);
};

export const editContact = data => {
  return authInstance.patch(`/contacts/${data.id}`, {
    name: data.name,
    number: data.number,
  });
};
