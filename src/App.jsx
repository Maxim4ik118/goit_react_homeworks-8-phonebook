import { Routes, Route, Link } from 'react-router-dom';
import { Contacts, SignIn, SignUp, UserMenu } from 'pages';

// const INITIAL_CONTACTS_LIST = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

const App = () => {

  return (
    <div className="app">
      <header className="header">
        <nav className="nav">
          <Link to="/contacts" className='nav__link'>Contacts</Link>
          <Link to="/settings" className='nav__link'>Settings</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/settings" element={<UserMenu />} />
      </Routes>
    </div>
  );
};

export default App;
