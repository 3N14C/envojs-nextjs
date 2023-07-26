"use client";

import MediaQuery from "react-responsive";
import { Normal } from "./screens/normal/Normal";
import { Mobile } from "./screens/adaptive/Mobile";

const About = () => {
  return (
    <>
      <MediaQuery minWidth={576}>
        <Normal />
      </MediaQuery>

      <MediaQuery maxWidth={576}>
        <Mobile />
      </MediaQuery>
    </>
  )
};

export { About };
