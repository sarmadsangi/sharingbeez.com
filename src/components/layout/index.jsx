import * as React from "react";
import "../../scss/styles.scss";

const Layout = ({ children }) => (
  <>
    <main className="p-8">{children}</main>
  </>
);

export default Layout;