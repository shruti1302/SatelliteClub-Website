import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from 'react-router-dom';

import Home from './components/Home';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          {/* <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/register'>
            <Register />
          </Route> */}
          <Route exact path='/' component={Home} />
          <Route exact path='/register' component={Register} />
          <Redirect to='/' />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};
export default App;
