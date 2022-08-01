import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function WithAuthRedirect(Component, navitateTo) {

  const WithAuthRedirect = props => {
    const { userData } = useSelector(state => state.user);

    return !userData ? <Navigate to={navitateTo}/> : <Component {...props} />;
  };

  return WithAuthRedirect;
}

export default WithAuthRedirect;
