import React from "react";
import { MainPage } from "./components/main-page/MainPage";
import './App.scss'
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { PageNotFound } from "./components/page-not-found/PageNotFound";
import { routes } from './routes';

interface AppProps {
  context?: { url?: string };
  location?: string;
  Router: any;
  store: any;
}

const App: React.FC<AppProps> = ({ context, location, Router, store }) => {

  return (
      <Provider store={store}>
        <Router location={location} context={context}>
          <MainPage />
          {routes.map(({ path, component }) => (
            <Route key={path} path={path} component={component} />
          ))}
        </Router>
      </Provider>
  );
};

export default App;
