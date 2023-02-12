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
The vision of Eat My Garden is to form a supportive community for sharing skills, ideas, and promoting sustainable living. The mission is to bring people together through skill sharing and working together in open garden spaces. The group encourages backyard gardening and sharing of homegrown produce with neighbors.<br/> <br/>Eat My Garden is supported by Werribee River Association and has partnerships with Gardening Swap Point Cook, Saltwater Gardening Champion, and Seabrook Garden and Produce Share. People are encouraged to create an edible garden and share the harvest with neighbors and at Eat My Garden Sharing Tables.
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
            href="https://www.facebook.com/groups/1050203421660881"
          >
            Join us on facebook
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
