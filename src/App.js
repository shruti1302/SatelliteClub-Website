import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from 'react-router-dom';

import Home from './components/Home';
import Register from './components/Register';
import Footer from './components/Footer';
import Satellite from './components/Satellite';
import Subsystems from './components/Subsystem';

const App = () => {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Switch>
          {/* <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/register'>
            <Register />
          </Route> */}
          <Route exact path='/' component={Home} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/satellite' component={Satellite} />
          <Route exact path='/subsystems' component={Subsystems} />

          <Redirect to='/' />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};
export default App;
