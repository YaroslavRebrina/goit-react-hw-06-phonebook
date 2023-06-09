import React from 'react';
import css from './ContactItem.module.css';
import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'store/contacts/slice';

export const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  return name.toLowerCase().includes(filter.toLowerCase()) ? (
    <li key={id} className={css.item}>
      <p className={css.itemChild}>{name}</p>
      <p className={css.itemChild}>{number}</p>
      <button
        className={css.itemButton}
        id={id}
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  ) : null;
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
