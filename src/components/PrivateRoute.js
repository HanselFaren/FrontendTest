import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useFirebase } from '../Firebase';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const firebase = useFirebase();
  const user = firebase.auth().currentUser;

  return (
    <Route
      {...rest}
      render={(props) => (user ? <Component {...props} /> : <Redirect to="/login" />)}
    />
  );
};

export default PrivateRoute;
