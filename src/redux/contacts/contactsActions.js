import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const addContact = createAction('contacts/add', (name, number) => ({
  payload: {
    contact: {
      id: uuidv4(),
      name,
      number,
    },
  },
}));
const getFromLS = createAction('contacts/getFromLS');
const removeContact = createAction('contacts/remove');
const filterContact = createAction('contacts/filter');

export default { addContact, removeContact, filterContact, getFromLS };
