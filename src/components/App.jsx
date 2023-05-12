import React from 'react';
import { ContactsForm } from './ContactsWidget/ContactsForm';
import { Filter } from './ContactsWidget/Filter';
import { ContactItem } from './ContactsWidget/ContactItem';



import css from './App.module.css';
import { useSelector } from 'react-redux';

export const App = () => {
  const getContacts = useSelector(state => state.contacts.contacts);

  return (
    <div className={css.global__wrapper}>
      <ContactsForm />
      <Filter />
      <ul className={css.itemList}>
        {getContacts.map(({ id, name, number }) => (
          <ContactItem key={id} id={id} name={name} number={number} />
        ))}
      </ul>
    </div>
  );
};
