import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Landpage from './landpage/Landpage';
import './styles/main.scss';
import './App.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/"><Landpage /></Route>
      </Switch>
    </Router>
  );
}

export default App;
