import * as React from "react";
import { SectionHeading } from "../../styled/reusable";
import { Header1, RainbowText } from "../../styled/typography";
import {
  AboutWrapper,
  AboutContent,
  AboutCharter,
  Date,
  NewDate,
  AboutRow
} from "./styled";
import { getStaticContent } from "../../services/static-file";
import { Text } from "../../styled/typography";

export const AboutScreen = () => {
  return (
    <div>
      <SectionHeading>
        <Header1>About</Header1>
      </SectionHeading>
      <AboutWrapper>
        <AboutRow>
          <img
            src={getStaticContent("misc/me2.jpg")}
            alt="It's me!"
          />
          <AboutContent>
            {" "}
            <b>NORO ART</b> draws inspiration from her everyday reality as well
            as from numerous trips she has taken. <br />
            The artist's dreams are composed of intimate journeys from the
            sacred places of ancient tribes to distant and undiscovered
            galaxies. <br />
            She reveals her complex emotions through vivid colors and their
            surprising combinations. <br />
            The surrealistic character of her works is the representative
            feature of her artistry.
            <br />
            The most remarkable trait of NORO ART is the technique she has
            favored - heavy application of UV paints allow her compositions to
            mesmerize the audience at night time with a strong game of contrasts
            between light and darkness.
          </AboutContent>
        </AboutRow>
        <AboutRow>
          <img
            src={getStaticContent("misc/me3.jpg")}
            alt="It's me!"
          />
          <AboutContent>
            <RainbowText>upcoming shows</RainbowText>
            <Date>
              <b>2020:</b>
            </Date>
            <Text>
              <b>
                <NewDate>7.11.2020</NewDate> "Art Trans-mission", Transformator,
                Wrocław
              </b>
            </Text>
            <AboutCharter>EXHIBITIONS</AboutCharter>
            <Date>
              <b>2019:</b>
            </Date>
            <Text>
              <b> "Transformation", Transformator, Wrocław, March</b>
            </Text>
            <Date>
              <b>2018:</b>
            </Date>
            <Text>
              <b>“Exhibition Room“, Wyspa Tamka (graffiti), Wrocław,</b>
            </Text>
            <Text>
              <b>
                “Through a Woman's Eyes”, Lower Silesia Film Centre ( DCF),
                Wrocław, June
              </b>
            </Text>

            <Date>
              <b>2017:</b>
            </Date>
            <Text>
              <b>“UV Collages” Szklarnia Cafe, Wrocław, January</b>
            </Text>
            <AboutCharter>education</AboutCharter>
            <Text>
              <b>
                Architecture, Wrocław University of Science and Technology 2018
              </b>
            </Text>
          </AboutContent>
        </AboutRow>
      </AboutWrapper>
    </div>
  );
};
