import * as React from "react";
import { Helmet } from "react-helmet";

const Head = () => (
  <Helmet>
    <meta charSet="utf-8" />
    <title>Eat My Garden - A community for sharing</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta
      name="description"
      content="Creating a supportive community by sharing skills, ideas and fresh produce to encourage self-sustaining behaviours using edible garden on an open space."
    />
    <meta
      name="keywords"
      content="community garden, point cook, melbourne, sharing skills, fresh produce"
    />
    <meta
      property="og:title"
      content="Eat My Garden | A community for sharing"
    />
    <meta property="og:url" content="https://www.eatmygarden.org.au/" />
    <meta
      property="og:description"
      content="Creating a supportive community by sharing skills, ideas and fresh produce to encourage self-sustaining behaviours using edible garden on an open space."
    />
  </Helmet>
);

export default Head;
