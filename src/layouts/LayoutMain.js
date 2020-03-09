import React from "react";
import "../assets/styles/LayoutStyles.sass";

const Layout = ({ children }) => (
  <React.Fragment>
    <header>
      <div className="content">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
        </ul>
      </div>
    </header>

    {children}
  </React.Fragment>
);

export default Layout;
