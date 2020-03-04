import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Ejemplo from "./pages/Ejemplo";

import LayoutMain from "./layouts/LayoutMain";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <LayoutMain>
        <Route exact path="/" component={Home} />
        <Route exact path="/ejemplo" component={Ejemplo} />
      </LayoutMain>
    </Switch>
  </BrowserRouter>
);

export default Routes;
