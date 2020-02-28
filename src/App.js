import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Landpage from './landpage/Landpage';
import Software from './software/Software';
import Contact from './contact/Contact';
import Test from './Test';
import './styles/main.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/"><Landpage /></Route>
        <Route path="/projects"><Software /></Route>
        <Route path="/contact"><Contact /></Route>
        <Route path="/test"><Test /></Route>
      </Switch>
    </Router>
  );
}

export default App;
