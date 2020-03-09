import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";

import LayoutMain from "./layouts/LayoutMain";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <LayoutMain>
        <Route exact path="/" component={Home} />
      </LayoutMain>
    </Switch>
  </BrowserRouter>
);

export default Routes;
