import * as React from "react";
import { SectionHeading } from "../../styled/reusable";
import { Header1 } from "../../styled/typography";
import { Gallery } from "../../components/Gallery";


export const GalleryScreen = () => {
  return (
    <div>
      <SectionHeading>
        <Header1>Selected Acrylic Painting Works</Header1>
      </SectionHeading>
      <Gallery />
    </div>
  );
};
