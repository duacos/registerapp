import React from "react";

const Layout = ({ children }) => (
  <React.Fragment>
    <h1>Hola desde el layoutMain</h1>
    {children}
  </React.Fragment>
);

export default Layout;
