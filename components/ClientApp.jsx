import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { render } from "react-dom";
import Home from "./Home";
import Category from "./Category";
import Random from "./Random";

const FourOhFour = () => <h1>404</h1>;

const App = () => (
  <div>
    <header>
      <h1>Potential 1:1 Questions</h1>
      <a href="/">Home</a>
    </header>
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/category/:categoryid" component={Category} />
          <Route exact path="/random" component={Random} />
          <Route component={FourOhFour} />
        </Switch>
      </div>
    </BrowserRouter>
    <footer>
      Questions from{" "}
      <a
        href="https://jasonevanish.com/2014/05/29/101-questions-to-ask-in-1-on-1s/"
        target="_blank"
        rel="noopener noreferrer"
      >
        101 Questions to Ask in One on Ones
      </a>.
    </footer>
  </div>
);

render(<App />, document.getElementById("app"));
