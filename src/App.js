import React from "react";
import ReactComponentExample from "./hw_1/components/React.Component/ReactComponentExample";
import createElementExample from "./hw_1/components/React.CreateElement/createElementExample";
import Pure from "./hw_1/components/React.PureComponent/pureComponentExample";
import {SearchBar} from "./hw_1/components/React.FC/FuncComponentExample";
import { Home } from "./hw_1/components/Main/Home";
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
        <Route path="/" exact component={Home} />
            <Route path="/reactComponent" exact component={ReactComponentExample} />
            <Route path="/funcComponent" exact component={SearchBar} />
            <Route path="/pureComponent" exact component={Pure} />
            <Route path="/createElement" exact component={createElementExample} />
        </Switch>
    </Router>
    </>
  );
}

export default App;
