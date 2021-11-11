import React from "react";
import { MainPage } from "./components/main-page/MainPage";
import './App.scss'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { PageNotFound } from "./components/page-not-found/PageNotFound";


function App(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route path={"/"} exact>
          <Redirect to="/search"/>
        </Route>
        <Route path={"/search/"} exact component={MainPage}/>
        <Route component={PageNotFound}/>
      </Switch>
    </Router>
  );
}

export default App;
