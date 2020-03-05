import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Comp from "./component/comp/comp.js";
import Home from "./component/home/home.js";
import Error from "./component/error/error.js";

const App = () => (
  <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/comp" component={Comp} />
        <Route path="/" component={Error} />
      </Switch>
    </BrowserRouter>
  </>
);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
