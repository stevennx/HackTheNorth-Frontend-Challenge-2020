import React from "react";
import Background from "../Background";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginCard from "../LoginCard";
import ProfileCard from "../ProfileCard"
import { Props } from './index'

const App: React.FC<Props>= ({ isAuthenticated }) => (
  <Background>
    <Router>
      <Switch>
        <Route exact path="/" component={isAuthenticated ? ProfileCard : LoginCard} />
        <Route path="/login" component={LoginCard} />
        <Route path="/profile" component={isAuthenticated ? ProfileCard : LoginCard} />
      </Switch>
    </Router>
  </Background>
);

export default App;
