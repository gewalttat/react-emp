import React from "react";
import { MainPage } from "./components/main-page/MainPage";
import './App.scss'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <>
    <Router>
        <Switch>
        <Route path="/" exact component={MainPage}/>
        </Switch>
    </Router>
    </>
  );
}

export default App;
