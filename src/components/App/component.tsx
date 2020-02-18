import React from "react";
import Background from "../Background";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginCard from "../LoginCard";
import ProfileCard from "../ProfileCard";
import NotFoundPage from "../NotFoundPage";
import { Props } from "./index";

const App: React.FC<Props> = ({ isAuthenticated }) => (
  <Background>
    <Router>
      <Switch>
        <Route
          path="/login"
          component={isAuthenticated ? NotFoundPage : LoginCard}
        />
        <Route
          path="/profile"
          component={isAuthenticated ? ProfileCard : LoginCard}
        />
        <Route component={isAuthenticated ? NotFoundPage : LoginCard} />
      </Switch>
    </Router>
  </Background>
);

export default App;
