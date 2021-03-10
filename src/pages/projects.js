import * as React from "react"
import Header from "../components/Header"
import SharingTableLocation from "../components/SharingTableLocation"

import { StaticImage } from "gatsby-plugin-image"

const ProjectsPage = () => (
  <div className="p-8" style={{ maxWidth: '600px' }}>
    <Header />
    <section className="mb-12">
      <h3 className="text-xl font-bold mb-2">Eat My Garden</h3>
      <p className="mb-8">
      Eat My Garden is a community project organised by Sharing Beez. Eat My Garden is invites people to create a small edible garden in front of their house and to share the harvest with neighbours.
      </p>


      <a target="_blank" href="https://www.facebook.com/groups/eatmygarden3030">
        <StaticImage
          className="rounded border"
          src="../images/sharingtable2.jpg"
          width={580}
          height={300}
          objectFit="center"
        />
      </a>
      <p>
        <a className="text-blue-600 underscore" target="_blank" href="https://www.facebook.com/SharingBeez">Join our public group on facebook</a> where we actively share fresh produce. 
      </p>
    </section>
    <section className="mb-16">
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
