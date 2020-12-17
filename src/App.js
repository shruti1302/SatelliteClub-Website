import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  HashRouter,
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
import Team from './components/Team';

const App = () => {
  return (
    <>
      <HashRouter>
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
          <Route exact path='/team' component={Team} />

          {/* <Redirect to='/' /> */}
        </Switch>
        <Footer />
      </HashRouter>
    </>
  );
};
export default App;
