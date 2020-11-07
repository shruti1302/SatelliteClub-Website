import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Home from './components/Home';
import Navbar from './components/Navbar';
import Register from './components/Register';

const App = () => {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/register' component={Register} />
        </Switch>
      </BrowserRouter>
    </>
  );
};
export default App;
