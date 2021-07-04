import React, { useState } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import NavigationMobile from "../navigation-mobile";

const Navigation = () => {
  const [open, setOpenMobileMenu] = useState(false);

  return (
    <nav className="Navigation">
      <div className="nav-wrapper">
        <div className="nav-items">
          <span
            role="button"
            className="nav-item-mobile-menu"
            onClick={() => {
              setOpenMobileMenu(!open);
            }}
            aria-label="Open Mobile Menu Button"
            tabIndex="0"
          >
            &#9776;
          </span>
          <Link to="/">
            <h2 className="font-bold text-2xl flex">
              <StaticImage
                className="rounded mr-3"
                width={35}
                height={35}
                src="../../images/logo.png"
                alt="Eat My Garden Logo"
              />
              Eat My Garden
            </h2>
          </Link>
          <div className="nav-item-links-container">
            <Link className="nav-item-link" to="/">
              Home
            </Link>
            <Link className="nav-item-link" to="/projects">
              Projects
            </Link>
            <Link className="nav-item-link" to="/gallery">
              Gallery
            </Link>
            <Link className="nav-item-link" to="/faq">
              FAQ
            </Link>
            <Link className="nav-item-link" to="/blog">
              Blog
            </Link>
            <Link className="nav-item-link" to="/contact">
              Contact
            </Link>
          </div>
        </div>
        <NavigationMobile open={open} setOpenMobileMenu={setOpenMobileMenu} />
      </div>
    </nav>
  );
};

export default Navigation;
