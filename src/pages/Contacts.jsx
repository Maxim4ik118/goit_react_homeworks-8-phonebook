import { useEffect } from 'react';
import { StyledContacts } from './Styled';
import { Filter, ContactList, Section, ContactForm } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import {
  addContact,
  getContatcts,
  deleteContact,
  setFilterTerm,
} from '../redux/phonebookActions';

export default function Contacts() {
  const dispatch = useDispatch();
  const { contacts, filterTerm, isFetching, error } = useSelector(
    state => state.phonebook
  );

  useEffect(() => {
    dispatch(getContatcts());
  }, [dispatch]);

  const handleAddContact = newContactData => {
    const newContactEntity = {
      id: nanoid(),
      ...newContactData,
    };

    if (!checkNewContactPresence(newContactEntity.name)) {
      dispatch(addContact(newContactEntity));
    } else {
      alert(`${newContactEntity.name} is already in contacts!`);
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
        <ContactList
          contacts={contactsFilteredByName}
          isFetching={isFetching}
          onDelete={handleDeleteContact}
        />
        {!!error && <div className="error">{error.message}</div>}
      </Section>
    </StyledContacts>
  );
}
