import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

const Header = () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Eat My Garden | A community for sharing</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Creating a supportive community by sharing skills, ideas and fresh produce to encourage self-sustaining behaviours using edible garden on an open space."/>
      <meta name="keywords" content="community garden, point cook, melbourne, sharing skills, fresh produce"/>
      <meta property="og:title" content="SharingBeez | A community for sharing" />
      <meta property="og:url" content="https://www.sharingbeez.com/" />
      <meta property="og:description" content="Creating a supportive community by sharing skills, ideas and fresh produce to encourage self-sustaining behaviours using edible garden on an open space." />
    </Helmet>
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
