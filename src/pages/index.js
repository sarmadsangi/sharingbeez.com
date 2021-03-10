import * as React from "react"
import Header from "../components/Header"
import SharingTableLocation from "../components/SharingTableLocation"

import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => (
  <div className="p-8" style={{ maxWidth: '600px' }}>
    <Header />
    <section className="mb-16" style={{ maxWidth: '600px' }}>
      <h3 className="text-xl font-bold mb-2">A community for sharing</h3>
      <p className="mb-8">
        Creating a supportive community by sharing skills, ideas and fresh produce to encourage self-sustaining behaviours using edible garden on an open space.
      </p>

      <a target="_blank" href="https://www.facebook.com/SharingBeez">
        <StaticImage
          className="rounded border"
          src="../images/garden.png"
          width={580}
          height={300}
          objectFit="center"
        />
      </a>
      <br />
      <p>
        <a className="text-blue-600 underscore" target="_blank" href="https://www.facebook.com/SharingBeez">Follow us on facebook</a> and keep upto date with our community projects.
      </p>
    </section>
    <hr className="mb-8 mt-8" />
    <SharingTableLocation />
  </div>
)

export default IndexPage
