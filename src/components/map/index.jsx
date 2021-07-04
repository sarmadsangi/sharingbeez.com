import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Map = () => (
  <section className="mb-10">
    <h3 className="text-lg font-bold mb-2">Visit us @ Sharing table</h3>
    <p className="mb-3">
      <b>Location: </b>
      <a
        target="_blank"
        rel="noreferrer" 
        href="https://www.google.com/maps/place/Garden+Swap+(Sharing+Table+by+Sharing+Beez)/@-37.879189,144.7406225,18z/data=!4m5!3m4!1s0x6ad689248630bc7b:0xe1fe388441aac5a9!8m2!3d-37.8791067!4d144.7404474"
      >
        Hollington Crescent and Dakota Pl intersection, Point Cook VIC 3030
      </a>
    </p>

    <p className="mb-8">
      <b>Hours: </b> Sunday 9:30am - 2:30pm
    </p>

    <a
      target="_blank"
      rel="noreferrer" 
      href="https://www.google.com/maps/place/Garden+Swap+(Sharing+Table+by+Sharing+Beez)/@-37.879189,144.7406225,18z/data=!4m5!3m4!1s0x6ad689248630bc7b:0xe1fe388441aac5a9!8m2!3d-37.8791067!4d144.7404474"
    >
      <StaticImage
        className="rounded border"
        src="../../images/map.png"
        width={580}
        height={300}
        objectFit="center"
        alt="Map Image"
      />
    </a>
  </section>
);

export default Map;
