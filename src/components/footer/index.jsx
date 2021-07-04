import * as React from "react";

const Footer = () => (
  <footer>
    <hr className="mb-8 mt-8" />
    <p className="text-center">Copyright © Eat My Garden 2020-{new Date().getFullYear()}</p>
  </footer>
);

export default Footer;
