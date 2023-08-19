import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contact/selectors';

import { addContact } from 'redux/contact/operations';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleNameChange = e => {
    setName(e.currentTarget.value);
  };

  const handleNumberChange = e => {
    setNumber(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const dataOfContact = contacts.some(
      el => el.name.toLowerCase() === name.toLowerCase() || el.number === number
    );
    dataOfContact
      ? alert(`${name} is already in contacts`)
      : dispatch(addContact({ name: name, number: number }));

    setName('');
    setNumber('');
  };

  return (
    <div className={css.container}>
      <form onSubmit={handleSubmit}>
        <label className={css.label}>
          Name
          <input
            className={css.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleNameChange}
          />
        </label>
        <label className={css.label}>
          Number
          <input
            className={css.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleNumberChange}
          />
        </label>
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};

ContactForm.propTypes = {
  number: PropTypes.string,
  name: PropTypes.string,
  handleSubmit: PropTypes.func,
};

export default ContactForm;
