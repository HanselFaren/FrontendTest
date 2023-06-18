import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Landing from './components/Landing';
import PrivateRoute from './components/PrivateRoute';
import Seller from './components/Seller';
import Store from './components/Store';
import { FirebaseProvider } from './Firebase';

const App = () => {
  return (
    <FirebaseProvider>
      <Router>
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/" component={Landing} />
          <PrivateRoute exact path="/seller" component={Seller} />
          <PrivateRoute exact path="/store" component={Store} />
        </Switch>
      </Router>
    </FirebaseProvider>
  );
};

export default App;
