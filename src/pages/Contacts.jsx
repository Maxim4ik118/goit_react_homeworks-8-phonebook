import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Alert from '@mui/material/Alert';

import { Filter, ContactList, Section, ContactForm } from '../components';

import {
  addContact,
  getContatcts,
  deleteContact,
  setFilterTerm,
} from '../redux/phonebook/phonebookActions';
import { LOGIN_ROUTE } from 'constants/routes';

import WithAuthRedirect from 'hoc/withAuthRedirect';

import { StyledContacts } from './Styled';

function Contacts() {
  const dispatch = useDispatch();
  const { contacts, filterTerm, isFetching, error } = useSelector(
    state => state.phonebook
  );

  useEffect(() => {
    const getContactsPromise = dispatch(getContatcts());

    return () => {
      getContactsPromise.abort();
    }
  }, [dispatch]);

  const handleAddContact = newContactData => {
    if (!checkNewContactPresence(newContactData.name)) {
      dispatch(addContact(newContactData));
    } else {
      alert(`${newContactData.name} is already in contacts!`);
    }
  };

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const handleFilterContactsByName = ({ target: { value } }) => {
    dispatch(setFilterTerm(value));
  };

  const checkNewContactPresence = contactName => {
    return contacts.some(contact => contact.name === contactName);
  };

  const contactsFilteredByName =
    (Array.isArray(contacts) &&
      contacts.filter(contact =>
        contact.name.toLowerCase().includes(filterTerm.toLowerCase())
      )) ??
    [];

  return (
    <StyledContacts>
      <Section title="Phonebook">
        <ContactForm addContact={handleAddContact} />
      </Section>
      <Section title="Contacts">
        <Filter filter={filterTerm} onChange={handleFilterContactsByName} />
        {!error && (
          <ContactList
            contacts={contactsFilteredByName}
            isFetching={isFetching}
            onDelete={handleDeleteContact}
          />
        )}
        {!!error && (
          <Alert className="error" severity="error">
            {error}
          </Alert>
        )}
      </Section>
    </StyledContacts>
  );
}

export default WithAuthRedirect(Contacts, LOGIN_ROUTE)