import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Header = () => (
  <>
  <header className="mb-8 flex justify-between">
    <Link to="/">
      <h2 className="font-bold text-2xl flex">
        <StaticImage className="rounded mr-3" width={35} height={35} src="../images/logo.png" />
        Sharing Beez
      </h2>
    </Link>
    <Link className="pt-2 pb-2 pl-3 pr-3 hover:bg-green-100 border rounded" to="/projects">Projects</Link>
  </header>
  <hr className="mb-16" />
  </>
)

export default Header
