import * as React from "react"
import Header from "../components/Header"
import SharingTableLocation from "../components/SharingTableLocation"

import { StaticImage } from "gatsby-plugin-image"

const ProjectsPage = () => (
  <div className="p-8" style={{ maxWidth: '600px' }}>
    <Header />
    <section className="mb-10">
      <h3 className="text-xl font-bold mb-2">Eat My Garden</h3>
      <p className="mb-8">
      Eat My Garden is a community project organised by Sharing Beez. Eat My Garden is invites people to create a small edible garden in front of their house and to share the harvest with neighbours.
      </p>

      <StaticImage
        className="rounded border"
        src="../images/sharingtable2.jpg"
        width={580}
        height={300}
        objectFit="center"
      />
    </section>
    <section className="mb-10">
      <h3 className="text-xl font-bold mb-2">Open Space Garden</h3>
      <p className="mb-8">
      Open Space Garden project is organised by Sharing Beez with support from Wyndham council. Its project that utilises green space in the neighbourhood by adding edible gardens.
      </p>

      <StaticImage
        className="rounded border"
        src="../images/openspace.jpg"
        width={580}
        height={300}
        objectFit="center"
      />
    </section>
    <hr className="mb-8 mt-8" />
    <SharingTableLocation />
  </div>
)

export default ProjectsPage
