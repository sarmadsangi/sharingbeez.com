import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Head from "../components/head";
import Header from "../components/header";
import Footer from "../components/footer";
import Map from "../components/map";
import Layout from "../components/layout";

const IndexPage = () => (
  <Layout>
    <Head />
    <Header />
    <div>
      <section className="mb-16">
        <h3 className="text-xl font-bold mb-2">A community for sharing</h3>
        <p className="mb-8">
          Creating a supportive community by sharing skills, ideas and fresh
          produce to encourage self-sustaining behaviours using edible garden on
          an open space.
        </p>

        <a target="_blank" rel="noreferrer" href="https://www.facebook.com/SharingBeez">
          <StaticImage
            className="rounded border"
            src="../images/garden.png"
            width={580}
            height={300}
            objectFit="center"
            alt="Eat my garden"
          />
        </a>
        <br />
        <p>
          <a
            className="text-blue-600 underscore"
            target="_blank"
            rel="noreferrer" 
            href="https://www.facebook.com/SharingBeez"
          >
            Follow us on facebook
          </a>{" "}
          and keep upto date with our community projects.
        </p>
      </section>
      <hr className="mb-8 mt-8" />
      <Map />
    </div>
    <Footer />
  </Layout>
);

export default IndexPage;
