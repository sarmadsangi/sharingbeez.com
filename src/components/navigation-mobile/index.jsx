import * as React from "react";
import { Link } from "gatsby";

const NavigationMobile = ({ open, setOpenMobileMenu }) => (
  <div className={`NavigationMobile ${open ? "active" : ""}`}>
    <span
      role="button"
      className="closebtn"
      onClick={() => {
        setOpenMobileMenu(!open);
      }}
      aria-label="Close Mobile Menu Button"
      tabIndex="0"
    >
      &times;
    </span>
    <Link className="nav-item-mobile" to="/">
      Home
    </Link>
    {/* enable these back once we have added content for these pages */}
    {/* <Link className="nav-item-mobile" to="/projects">
      Projects
    </Link>
    <Link className="nav-item-mobile" to="/gallery">
      Gallery
    </Link>
    <Link className="nav-item-mobile" to="/faq">
      FAQ
    </Link>
    <Link className="nav-item-mobile" to="/blog">
      Blog
    </Link>
    <Link className="nav-item-mobile" to="/contact">
      Contact
    </Link> */}
  </div>
);

export default NavigationMobile;
