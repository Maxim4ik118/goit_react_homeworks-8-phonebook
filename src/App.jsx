import { Suspense, useEffect, lazy } from 'react';
import {
  Routes,
  Route,
  NavLink,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Loader } from 'components';

import { CONTACTS_ROUTE, HOME_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE, SETTINGS_ROUTE } from 'routes/constants';
import { getUserDetailsRequest } from 'redux/user/userActions';


const LazyContacts = lazy(() => import('./pages/Contacts'));
const LazyUserMenu = lazy(() => import('./pages/UserMenu'));
const LazySignUp = lazy(() => import('./pages/SignUp'));
const LazySignIn = lazy(() => import('./pages/SignIn'));

const App = () => {
  const { userData } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === HOME_ROUTE) navigate('/contacts');
  }, [navigate, location.pathname]);

  useEffect(() => {
    if (!!userData) return;

    dispatch(getUserDetailsRequest());
  }, [dispatch, userData]);

  return (
    <div className="app">
      <header className="header">
        <nav className="nav">
          <NavLink to={CONTACTS_ROUTE} className={({ isActive }) => `${isActive ? "nav__link--active" : ""} nav__link`}>
            Contacts
          </NavLink>
          <NavLink to={SETTINGS_ROUTE} className={({ isActive }) => `${isActive ? "nav__link--active" : ""} nav__link`}>
            Settings
          </NavLink>
        </nav>
      </header>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path={REGISTER_ROUTE} element={<LazySignUp />} />
          <Route path={LOGIN_ROUTE} element={<LazySignIn />} />
          <Route path={CONTACTS_ROUTE} element={<LazyContacts />} />
          <Route path={SETTINGS_ROUTE} element={<LazyUserMenu />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
