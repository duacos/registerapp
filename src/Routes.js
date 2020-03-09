import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Edit from "./pages/Edit";

import LayoutMain from "./layouts/LayoutMain";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <LayoutMain>
        <Route exact path="/" component={Home} />
        <Route exact path="/empresas/:id/edit" component={Edit} />
      </LayoutMain>
    </Switch>
  </BrowserRouter>
);

export default Routes;
