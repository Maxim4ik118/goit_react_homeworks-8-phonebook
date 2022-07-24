import { Routes, Route } from 'react-router-dom';

import { Contacts } from 'pages';

// const INITIAL_CONTACTS_LIST = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="contacts" element={<Contacts />} />
      </Routes>
      {/* <Route path="/contacts" component={Contacts} />
        <Route path="/contacts" component={Contacts} /> */}
      {/* <Section title="Phonebook">
        <ContactForm addContact={handleAddContact} />
      </Section>
      <Section title="Contacts">
        <Filter filter={filterTerm} onChange={handleFilterContactsByName} />
        <ContactList
          contacts={contactsFilteredByName}
          filter={filterTerm}
          isFetching={isFetching}
          onDelete={handleDeleteContact}
        />
        {!!error && <div className="error">{error.message}</div>}
      </Section> */}
    </div>
  );
};

export default App;
